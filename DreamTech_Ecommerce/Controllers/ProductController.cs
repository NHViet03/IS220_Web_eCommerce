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
        public IActionResult Index()
        {
            var products = _context.Products
                .Include(e => e.ProductImages)
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
                if (model.Image == null || model.Image.Length == 0)
                {
                    return BadRequest("Image is required.");
                }

                var imagePath = SaveImageToServer(model.Image);

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

                var newProductImage = new ProductImage
                {
                    ImageUrl = imagePath,
                    ProductId = newProduct.Id
                };

                if (model.CategoryId != null)
                {
                    var category = _context.Categories.Find(model.CategoryId);
                    category.Products.Add(newProduct);
                }

                newProduct.ProductImages.Add(newProductImage);
                _context.Products.Add(newProduct);
                _context.SaveChanges();

                return Ok();
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

            return "/wwwroot/images/" + fileName;
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
    }

    public class ProductViewModel
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
        public IFormFile Image { get; set; }
    }
}
