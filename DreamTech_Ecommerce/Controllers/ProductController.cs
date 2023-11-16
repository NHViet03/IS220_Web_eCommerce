using DreamTech_Ecommerce.DAL;
using DreamTech_Ecommerce.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;

namespace DreamTech_Ecommerce.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
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

        [HttpGet]
        public IActionResult Index()
        {
            return Ok();
        }

        [HttpPost]
        public IActionResult CreateProduct([FromForm] ProductInputViewModel model)
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
                    Brand = model.Brand,
                    Name = model.Name,
                    Description = model.Description,
                    Price = model.Price,
                    QtyInStock = model.QtyInStock,
                    CategoryId = model.CategoryId
                };

                _context.Products.Add(newProduct);
                _context.SaveChanges();

                var outputModel = new ProductOutputViewModel
                {
                    Id = newProduct.Id,
                    Brand = newProduct.Brand,
                    Name = newProduct.Name,
                    Description = newProduct.Description,
                    Price = newProduct.Price,
                    QtyInStock = newProduct.QtyInStock,
                    CategoryId = newProduct.CategoryId,
                    CategoryName = newProduct.Category?.Name,
                    ImageUrl = imagePath
                };

                return Ok(outputModel);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        private string SaveImageToServer(IFormFile image)
        {
            var projectRootPath = Directory.GetCurrentDirectory();
            var uploadFolder = Path.Combine(projectRootPath, "Uploads");

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

            return "/Uploads/" + fileName;
        }


        [HttpPost("UnassignFromCategory")]
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
    public class ProductInputViewModel
    {
        public string? Brand { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public int Price { get; set; }
        public int QtyInStock { get; set; }
        public IFormFile Image { get; set; }
        public string? CategoryId { get; set; }
    }

    public class ProductOutputViewModel
    {
        public string Id { get; set; }
        public string? Brand { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public int Price { get; set; }
        public int QtyInStock { get; set; }
        public string? CategoryId { get; set; }
        public string? CategoryName { get; set; }
        public string? ImageUrl { get; set; }
    }
}
