using DreamTech_Ecommerce.DAL;
using DreamTech_Ecommerce.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DreamTech_Ecommerce.Controllers
{

    [ApiController]
    [Route("[controller]")]
    [Authorize(Roles = "Admin")]
    public class CategoryController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly DreamAppContext _context;

        public CategoryController(DreamAppContext context)
        {
            _context = context;
        }

        [HttpGet("GetAll")]
        public IActionResult Index()
        {
            var allCategories = _context.Categories.Include(c => c.Products).ToList();
            return Ok(allCategories);
        }

        [HttpGet("GetById/{categoryId}")]
        public IActionResult Details(string categoryId)
        {
            var category = _context.Categories.Include(c => c.Products).Where(e => e.Id == categoryId);
            return Ok(category);
        }

        [HttpPost("Create")]
        public IActionResult Create([FromBody]Category model)
        {
            var category = _context.Categories.Find(model.Id);

            if (category != null) {
                return Ok(new { ErrorMessage = "Danh mục đã tồn tại" });
            }
            try
            {
                _context.Categories.Add(model);
                _context.SaveChanges();
                return Ok(new { Message = "Đã tạo danh mục thành công" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete("Delete/{categoryId}")]
        public IActionResult Delete(string categoryId)
        {
            var category = _context.Categories.Find(categoryId);

            if (category != null)
            {
                return BadRequest(new { ErrorMessage = "Danh mục không tồn tại :(" });
            }

            try
            {
                _context.Categories.Remove(category); 
                _context.SaveChanges();
                return Ok(new { Message = "Xóa thành công" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("AssignProductToCategory")]
        public IActionResult AssignedProductToCategory(string productId, string categoryId)
        {
            var product = _context.Products.Find(productId);
            var category = _context.Categories.Find(categoryId);

            if (product == null || category == null)
            {
                return NotFound("Product or category not found");
            }

            product.Category = category;
            _context.SaveChanges();

            // Optionally, you can return a success message or other relevant information
            return Ok($"Product '{product.Name}' assigned to category '{category.Name}'");
        }
    }

    public class CategoryViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
    }
}
