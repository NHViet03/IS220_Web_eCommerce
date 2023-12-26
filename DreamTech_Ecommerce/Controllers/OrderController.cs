using DreamTech_Ecommerce.DAL;
using DreamTech_Ecommerce.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DreamTech_Ecommerce.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class OrderController : Controller
    {
        private readonly DreamAppContext _context;

        public OrderController(DreamAppContext context)
        {
            _context = context;
        }

        [HttpGet("GetAllOrders")]
        [Authorize(Roles = "Admin")]
        public IActionResult GetAllOrders()
        {
            var orders = _context.Orders.ToList();

            return Ok(orders);
        }

        [HttpPost("CreateOrder")]
        [Authorize]
        public IActionResult CreateOrder([FromBody] Order model)
        {
            var orders = _context.Orders.ToList();

            return Ok(orders);
        }
    }
}
