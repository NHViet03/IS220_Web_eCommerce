using DreamTech_Ecommerce.DAL;
using DreamTech_Ecommerce.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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

        private class CartViewModel
        {
            public int ProductId {  get; set; }
            public int UserId { get; set; } 
        }

        [Authorize(Roles = "Admin")]
        [HttpGet]
        public IActionResult Index()
        {
            var allCarts = _context.CartItems.ToList();
            return Ok(allCarts);
        }

        [HttpPost("GetByUser/{userId}")]
        public IActionResult GetCartsByUser(int userId)
        { 
            try
            {
                var carts = _context.CartItems.Include(cart => cart.Product).Where(e => e.UserId == userId).ToList();
                return Ok(carts);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpPost("AddToCart")]
        public IActionResult AddToCart([FromBody] CartItem cart)
        {
            if (cart == null)
            {
                return BadRequest("Invalid cart data");
            }

            var user = _context.Users.Find(cart.UserId);
            var product = _context.Products.Find(cart.ProductId);

            if (user == null || product == null)
            {
                return NotFound("Không tìm sản phẩm hoặc user để thêm giỏ hàng");
            }

            cart.User = user;
            cart.Product = product;

            try
            {
                _context.CartItems.Add(cart);
                _context.SaveChanges();

                return CreatedAtAction(nameof(CartItem), new { id = cart.Id }, cart);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpDelete("Delete/{Id}")]
        public IActionResult RemoveFromCart([FromBody] int Id)
        {
            try
            {
                var cart = _context.CartItems.Find(Id);

                if (cart == null)
                {
                    return NotFound("Không tìm thấy sản phẩm");
                }

                return Ok("Ok");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            
        }
    }
}
