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
        [Authorize(Roles = "Admin")]
        public IActionResult PostOrder([FromBody] CreateOrderForAdminModel model)
        {
            try
            {
                int orderTotal = 0;
                var orderItemList = new List<OrderItem>();

                var newOrder = new Order()
                {
                    UserId = model.User.UserId,
                    OrderDate = DateTime.Now,
                    OrderStatus = OrderStatus.Pending,
                    ShippingAddress = model.Address,
                };

                foreach (OrderItemCreateModel item in model.OrderItems)
                {
                    var productItem = _context.Products.Where(p => p.Id == item.ProductId).FirstOrDefault();

                    if (productItem == null)
                    {
                        return BadRequest("Item may be null! Cant make order :( ");
                    }

                    if (productItem.SalePrice.HasValue)
                    {
                        orderTotal += productItem.SalePrice.Value * item.Qty;
                    }
                    else
                    {
                        orderTotal += productItem.Price * item.Qty;
                    }

                    var orderItem = new OrderItem()
                    {
                        Qty = item.Qty,
                        ProductId = item.ProductId,
                        OrderId = newOrder.Id
                    };

                    orderItemList.Add(orderItem);
                    newOrder.OrderDetails.Add(orderItem);
                }

                newOrder.TotalAmount = orderTotal;


                _context.Orders.Add(newOrder);
                _context.SaveChanges();

                return Ok(newOrder);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }

        [HttpPost("CustomerMakeOrder/{userId}")]
        [Authorize(Roles = "Customer")]
        public IActionResult CreateOrder(int userId, [FromBody] CreateOrderModel order)
        {
            try
            {
                var userIdClaim = HttpContext.User.Claims.FirstOrDefault(c => c.Type == "Id");

                if (userIdClaim == null || !int.TryParse(userIdClaim.Value, out int tokenUserId))
                {
                    return BadRequest("Unable to retrieve user ID from the token");
                }

                if (tokenUserId != userId)
                {
                    return Forbid("You don't have permission to access this resource");
                }

                int orderTotal = 0;
                var orderItemList = new List<OrderItem>();
                var newOrder = new Order()
                {
                    UserId = userId,
                    OrderDate = DateTime.Now,
                    OrderStatus = OrderStatus.Pending,
                    ShippingAddress = order.Address,
                };

                var cartItems = _context.CartItems
                    .Where(item => item.UserId == userId)
                        .Include(cart => cart.Product)
                    .ToList();

                foreach (CartItem cart in cartItems)
                {
                    if (cart.Product.SalePrice.HasValue)
                    {
                        orderTotal += cart.Product.SalePrice.Value * cart.Qty; 
                    }
                    else
                    {
                        orderTotal += cart.Product.Price * cart.Qty;
                    }

                    var orderItem = new OrderItem()
                    {
                        Qty = cart.Qty,
                        ProductId = cart.ProductId,
                        OrderId = newOrder.Id
                    };

                    orderItemList.Add(orderItem);
                    newOrder.OrderDetails.Add(orderItem);
                    _context.CartItems.Remove(cart);
                }

                newOrder.TotalAmount = orderTotal;

                
                _context.Orders.Add(newOrder);
                _context.SaveChanges();

                return Ok(newOrder);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }
    }
    public class CreateOrderModel
    {
        public string Address { get; set; }
        public string? Note { get; set; }
    }

    public class CreateOrderForAdminModel : CreateOrderModel
    {
        public UserCreateModel User { get; set; }
        public List<OrderItemCreateModel> OrderItems { get; set; }
        public string? Note { get; set; }
        public string? Address { get; set; }
    }

    public class UserCreateModel
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
    }

    public class OrderItemCreateModel
    {
        public string ProductId { get; set;}
        public int Qty { get; set; }
    }
}
