using DreamTech_Ecommerce.DAL;
using DreamTech_Ecommerce.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DreamTech_Ecommerce.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly DreamAppContext _context;
        public UserController(DreamAppContext context)
        {
            _context = context;
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("GetAllUsers")]
        public IActionResult GetAllUsers([FromQuery] int? id = null, [FromQuery] string? name = null, [FromQuery] string? phone = null, [FromQuery] string? email = null)
        {
            try
            {
                var query = _context.Users.AsQueryable();

                if (id.HasValue)
                {
                    query = query.Where(u => u.Id == id.Value);
                }

                if (!string.IsNullOrEmpty(name))
                {
                    query = query.Where(u => u.FirstName.Contains(name) || u.LastName.Contains(name));
                }

                if (!string.IsNullOrEmpty(phone))
                {
                    query = query.Where(u => u.Phone == phone);
                }

                if (!string.IsNullOrEmpty(email))
                {
                    query = query.Where(u => u.Email == email);
                }

                var users = query.ToList();

                return Ok(users);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("GetTopCustomers")]
        public IActionResult Index([FromQuery] int count = 5)
        {
            var topCustomers = _context.Users
            .Where(u => u.Role == Role.Customer)
            .Select(user => new
            {
                user.Id,
                Name = $"{user.FirstName} {user.LastName}",
                user.Email,
                user.Phone,
                Total = _context.Orders
                    .Where(o => o.UserId == user.Id && o.OrderStatus == OrderStatus.Completed)
                    .Sum(o => (int?)o.TotalAmount) ?? 0
            })
            .OrderByDescending(result => result.Total)
            .Take(count)
            .ToList();

            return Ok(topCustomers);
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("GetCustomerDetail/{userId}")]
        public IActionResult GetCustomerDetail(int userId)
        {
            try
            {
                var customer = _context.Users
                    .Include(u => u.Orders) 
                        .ThenInclude(o => o.OrderDetails)
                    .FirstOrDefault(u => u.Id == userId);

                if (customer == null)
                {
                    return NotFound("Customer not found.");
                }

                return Ok(customer);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
