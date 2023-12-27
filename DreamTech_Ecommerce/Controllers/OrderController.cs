using DreamTech_Ecommerce.DAL;
using DreamTech_Ecommerce.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        public IActionResult GetAllOrders([FromQuery] OrderStatus? status = null, [FromQuery] DateTime? dateFrom = null, [FromQuery] DateTime? dateTo = null, [FromQuery] int page = 1)
        {
            const int pageSize = 10;

            if (page < 1)
            {
                page = 1;
            }

            var query = _context.Orders
                .AsQueryable();

            if (status.HasValue)
            {
                query = query.Where(o => o.OrderStatus == status.Value);
            }

            if (dateFrom.HasValue)
            {
                query = query.Where(o => o.OrderDate >= dateFrom.Value.Date);
            }

            if (dateTo.HasValue)
            {
                query = query.Where(o => o.OrderDate <= dateTo.Value.Date);
            }

            int skipCount = (page - 1) * pageSize;

            var orders = query
                .Include(o => o.OrderDetails)
                    .ThenInclude(od => od.Product)
                        .ThenInclude(pro => pro.ProductImages)
                .Skip(skipCount)
                .Take(pageSize)
                .ToList();
                
            return Ok(orders);
        }

        [HttpGet("GetOrderById/{orderId}")]
        [Authorize]
        public IActionResult GetOrderById(int orderId)
        {
            var order = _context.Orders
                .Include(o => o.User)
                .Include(o => o.Discount)
                .Include(o => o.OrderDetails)
                    .ThenInclude(od => od.Product)
                        .ThenInclude(pro => pro.ProductImages)
                .Include(o => o.Payments)
                .FirstOrDefault(o => o.Id == orderId);

            if (order == null)
            {
                return NotFound("Order not found.");
            }

            return Ok(order);
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
