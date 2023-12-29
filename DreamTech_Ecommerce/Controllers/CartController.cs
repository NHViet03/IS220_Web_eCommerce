using DreamTech_Ecommerce.DAL;
using DreamTech_Ecommerce.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

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

        [Authorize]
        [HttpGet("GetByUser/{userId}")]
        public IActionResult GetCartsByUser(int userId)
        { 
            try
            {
                var userIdClaim = HttpContext.User.Claims.FirstOrDefault(c => c.Type == "Id");
                var roleClaim = HttpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimsIdentity.DefaultRoleClaimType);

                if (userIdClaim == null || !int.TryParse(userIdClaim.Value, out int tokenUserId))
                {
                    return BadRequest("Unable to retrieve user ID from the token");
                }

                bool isAdmin = roleClaim != null && roleClaim.Value == "Admin";

                if (!isAdmin && tokenUserId != userId)
                {
                    return Forbid("You don't have permission to access this resource");
                }

                var carts = _context.CartItems
                    .Include(cart => cart.Product)
                        .ThenInclude(product => product.ProductImages)
                    .Include(cart => cart.Product.Gifts)
                    .Where(e => e.UserId == userId)
                    .ToList();
                return Ok(carts);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Authorize]
        [HttpPut("UpdateQty/{cartId}")]
        public IActionResult UpdateQty(int cartId, [FromQuery] int qty) {
            try
            {
                var cartItem = _context.CartItems.Find(cartId);

                if (cartItem == null)
                {
                    return NotFound("CartItem not found");
                }

                var userIdClaim = HttpContext.User.Claims.FirstOrDefault(c => c.Type == "Id");
                var roleClaim = HttpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimsIdentity.DefaultRoleClaimType);

                if (userIdClaim == null || !int.TryParse(userIdClaim.Value, out int tokenUserId))
                {
                    return BadRequest("Unable to retrieve user ID from the token");
                }

                bool isAdmin = roleClaim != null && roleClaim.Value == "Admin";

                if (!isAdmin && tokenUserId != cartItem.UserId)
                {
                    return Forbid("You don't have permission to access this resource");
                }

                cartItem.Qty = qty;

                _context.SaveChanges();

                return Ok(cartItem);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Authorize(Roles = "Customer")]
        [HttpPost("AddToCart")]
        public IActionResult AddToCart([FromBody] AddToCartDto model)
        {
            if (model == null)
            {
                return BadRequest("Invalid cart data");
            }

            var userIdClaim = HttpContext.User.Claims.FirstOrDefault(c => c.Type == "Id");

            if (userIdClaim == null || !int.TryParse(userIdClaim.Value, out int tokenUserId))
            {
                return BadRequest("Unable to retrieve user ID from the token");
            }

            var user = _context.Users.Find(tokenUserId);
            var product = _context.Products.Find(model.ProductId);

            if (user == null || product == null)
            {
                return NotFound("Không tìm sản phẩm hoặc user để thêm giỏ hàng");
            }

            var newCartItem = new CartItem()
            {
                UserId = tokenUserId,
                ProductId = product.Id,
                Qty = model.Qty,
            };

            try
            {
                _context.CartItems.Add(newCartItem);
                _context.SaveChanges();

                var carts = _context.CartItems
                    .Where(c => c.UserId == user.Id)
                    .Include(c => c.Product)
                        .ThenInclude(p => p.ProductImages)
                    .ToList();

                return Ok(new { newCartItems = carts });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [Authorize]
        [HttpDelete("Delete/{Id}")]
        public IActionResult RemoveFromCart(int Id)
        {
            try
            {
                var userIdClaim = HttpContext.User.Claims.FirstOrDefault(c => c.Type == "Id");
                var roleClaim = HttpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimsIdentity.DefaultRoleClaimType);

                if (userIdClaim == null || !int.TryParse(userIdClaim.Value, out int tokenUserId))
                {
                    return BadRequest("Unable to retrieve user ID from the token");
                }

                bool isAdmin = roleClaim != null && roleClaim.Value == "Admin";
                var cart = _context.CartItems.Find(Id);

                if (!isAdmin && tokenUserId != cart.UserId)
                {
                    return Forbid("You don't have permission to access this resource");
                }


                if (cart == null)
                {
                    return NotFound("Không tìm thấy sản phẩm");
                }

                _context.CartItems.Remove(cart);
                _context.SaveChanges();

                return Ok("Ok");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            
        }

        public class AddToCartDto
        {
            public string ProductId { get; set;}
            public int Qty { get; set;}
        }
    }
}
