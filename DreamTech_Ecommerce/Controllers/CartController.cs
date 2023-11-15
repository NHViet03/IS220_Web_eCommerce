using DreamTech_Ecommerce.DAL;
using DreamTech_Ecommerce.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DreamTech_Ecommerce.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class CartController : Controller
    {
        private readonly DreamAppContext _context;
        public CartController(DreamAppContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Index()
        {
            var allCarts = _context.Carts.ToList();
            return Ok(allCarts);
        }

        [HttpPost]
        public IActionResult AddToCart([FromBody] Cart cart)
        {
            if (cart == null)
            {
                return BadRequest("Invalid cart data");
            }

            var user = _context.Users.Find(cart.UserId);
            var product = _context.Products.Find(cart.ProductId);

            if (user == null || product == null)
            {
                return NotFound("User or product not found");
            }

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

        [HttpDelete("{Id}")]
        public IActionResult RemoveFromCart([FromBody] int Id)
        {
            var cart = _context.Carts.Find(Id);

            if (cart == null)
            {
                return NotFound("Không tìm thấy sản phẩm");
            }

           return Ok("Ok");
        }
    }
}
