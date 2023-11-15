using DreamTech_Ecommerce.DAL;
using DreamTech_Ecommerce.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DreamTech_Ecommerce.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CartController : Controller
    {
        private readonly DreamAppContext _context;
        public CartController(DreamAppContext context)
        {
            _context = context;
        }

        [HttpGet("all")]
        public IActionResult Index()
        {
            var allCarts = _context.Carts.ToList();
            return Ok(allCarts);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Cart cart)
        {
            if (cart == null)
            {
                return BadRequest("Invalid cart data");
            }

            // Assuming you have a YourDbContext instance called _dbContext
            var user = _context.Users.Find(cart.UserId);
            var product = _context.Products.Find(cart.ProductId);

            if (user == null || product == null)
            {
                return NotFound("User or product not found");
            }

            // Associate the User and Product with the Cart
            cart.User = user;
            cart.Product = product;

            try
            {
                _context.Carts.Add(cart);
                _context.SaveChanges();

                return CreatedAtAction(nameof(Cart), new { id = cart.Id }, cart);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
