using DreamTech_Ecommerce.DAL;
using DreamTech_Ecommerce.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DreamTech_Ecommerce.Utils;

namespace DreamTech_Ecommerce.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly DreamAppContext _context;
        private readonly IWebHostEnvironment _environment;

        public ProductController(DreamAppContext context, IConfiguration configuration, IWebHostEnvironment environment)
        {

            _environment = environment;
            _configuration = configuration;
            _context = context;
        }

        [HttpGet("GetAll")]
        public IActionResult Index([FromQuery] string? category = null, [FromQuery] string? search = null,[FromQuery] int? priceFrom = null, [FromQuery] int? priceTo = null, [FromQuery] int page = 1, [FromQuery] int pageSize  = 10)
        {

            if (page < 1)
            {
                page = 1;
            }

            var query = _context.Products
                .Include(e => e.ProductImages)
                .Include(e => e.Category)
                .AsQueryable();


            if (!string.IsNullOrEmpty(category))
            {
                query = query.Where(p => p.CategoryId == category);
            }

            if (!string.IsNullOrEmpty(search))
            {
                query = query.Where(p => p.Name.Contains(search));
            }

            if (priceFrom > 0)
            {
                query = query.Where(p => p.SalePrice >= priceFrom);
            }

            if (priceTo > 0)
            {
                query = query.Where(p => p.SalePrice <= priceTo);
            }

            int skipCount = (page - 1) * pageSize;

            var products = query
                .Skip(skipCount)
                .Take(pageSize)
                .ToList();

            return Ok(products);
        }

        [HttpGet("GetProductById/{Id}")]
        public IActionResult GetById(String Id)
        {
            var product = _context.Products
                .Include(e => e.ProductImages)
                .Include(e => e.Gifts)
                .FirstOrDefault(p => p.Id == Id);
            return Ok(product);
        }

        [HttpPost("Create")]
        [Authorize(Roles = "Admin")]
        public IActionResult CreateProduct([FromForm] ProductViewModel model)
        {
            try
            {
                if (model.Images == null || model.Images.Count == 0)
                {
                    return BadRequest("At least one image is required.");
                }

                var productImages = new List<ProductImage>();

                foreach (var image in model.Images)
                {
                    if (image.Length == 0)
                    {
                        return BadRequest("Image file is empty.");
                    }

                    var imagePath = SaveImageToServer(image);
                    var productImage = new ProductImage { ImageUrl = imagePath };
                    productImages.Add(productImage);
                }

                var newProduct = new Product
                {
                    Id = model.Id,
                    Brand = model.Brand,
                    Name = model.Name,
                    Description = model.Description,
                    Price = model.Price,
                    SalePrice = model.SalePrice,
                    Cpu = model.Cpu,
                    Ram = model.Ram,
                    Disk = model.Disk,
                    Vga = model.Vga,
                    Screen = model.Screen,
                    Battery = model.Battery,
                    Weight = model.Weight,
                    Size = model.Size,
                    Color = model.Color,
                    QtyInStock = model.QtyInStock,
                    CategoryId = model.CategoryId
                };

                foreach (var image in productImages)
                {
                    newProduct.ProductImages.Add(image);
                }

                if (model.CategoryId != null)
                {
                    var category = _context.Categories.Find(model.CategoryId);

                    if (category != null)
                    {
                        category.Products.Add(newProduct);
                    }
                }

                _context.Products.Add(newProduct);
                _context.SaveChanges();

                return Ok(newProduct);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost("UnassignFromCategory")]
        [Authorize(Roles = "Admin")]
        public IActionResult UnassignProductFromCategory(string productId)
        {
            var product = _context.Products.Find(productId);

            if (product == null)
            {
                return NotFound("Product not found");
            }

            product.Category = null;
            _context.SaveChanges();

            return Ok($"Product '{product.Name}' unassigned from any category");
        }


        [HttpPut("UpdateProduct")]
        [Authorize(Roles = "Admin")]
        public IActionResult UpdateProduct([FromBody] ProductUpdateModel model)
        {
            try
            {
                if (model == null || string.IsNullOrEmpty(model.Id))
                {
                    return BadRequest("Invalid request data.");
                }

                var existingProduct = _context.Products
                    .Include(p => p.ProductImages)
                    .FirstOrDefault(p => p.Id == model.Id);

                if (existingProduct == null)
                {
                    return NotFound("Product not found.");
                }

                existingProduct.Brand = model.Brand;
                existingProduct.Name = model.Name;
                existingProduct.Description = model.Description;
                existingProduct.Price = model.Price;
                existingProduct.SalePrice = model.SalePrice;
                existingProduct.Cpu = model.Cpu;
                existingProduct.Ram = model.Ram;
                existingProduct.Disk = model.Disk;
                existingProduct.Vga = model.Vga;
                existingProduct.Screen = model.Screen;
                existingProduct.Color = model.Color;
                existingProduct.Size = model.Size;
                existingProduct.Weight = model.Weight;
                existingProduct.Battery = model.Battery;
                existingProduct.QtyInStock = model.QtyInStock;
                existingProduct.CategoryId = model.CategoryId;

                _context.SaveChanges();

                return Ok("Product updated successfully.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpDelete("DeleteProduct/{productId}")]
        [Authorize(Roles = "Admin")]
        public IActionResult DeleteProduct(string productId)
        {
            try
            {
                if (string.IsNullOrEmpty(productId))
                {
                    return BadRequest("Invalid product ID.");
                }

                var productToDelete = _context.Products
                    .Include(p => p.ProductImages)
                    .FirstOrDefault(p => p.Id == productId);

                if (productToDelete == null)
                {
                    return NotFound("Product not found.");
                }

                foreach (var image in productToDelete.ProductImages)
                {
                    DeleteImageFromServer(image.ImageUrl);
                    _context.ProductImages.Remove(image);
                }

                _context.Products.Remove(productToDelete);
                _context.SaveChanges();

                return Ok("Product deleted successfully.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        private string SaveImageToServer(IFormFile image)
        {
            var projectRootPath = Directory.GetCurrentDirectory();
            var uploadFolder = Path.Combine(projectRootPath, "wwwroot/images");

            if (!Directory.Exists(uploadFolder))
            {
                Directory.CreateDirectory(uploadFolder);
            }

            var fileName = Guid.NewGuid().ToString() + "_" + image.FileName;
            var filePath = Path.Combine(uploadFolder, fileName);

            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                image.CopyTo(fileStream);
            }

            return "http://localhost:5031/images/" + fileName;
        }

        private void DeleteImageFromServer(string imageUrl)
        {
            try
            {
                var projectRootPath = Directory.GetCurrentDirectory();
                var imagePath = Path.Combine(projectRootPath, "wwwroot", imageUrl.TrimStart('/'));

                if (System.IO.File.Exists(imagePath))
                {
                    System.IO.File.Delete(imagePath);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error deleting image: {ex.Message}");
            }
        }
    }

    public class ProductUpdateModel
    {
        public string Id { get; set; }
        public string? Brand { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public int Price { get; set; }
        public int? SalePrice { get; set; }
        public String? Cpu { get; set; }
        public String? Ram { get; set; }
        public String? Disk { get; set; }
        public String? Vga { get; set; }
        public String? Screen { get; set; }
        public String? Color { get; set; }
        public String? Size { get; set; }
        public String? Weight { get; set; }
        public String? Battery { get; set; }
        public int QtyInStock { get; set; }
        public string? CategoryId { get; set; }
    }
    public class ProductViewModel : ProductUpdateModel
    {

        public List<IFormFile> Images { get; set; }
    }
}
