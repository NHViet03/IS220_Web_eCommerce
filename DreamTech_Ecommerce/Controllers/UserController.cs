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
        [HttpGet("/GetAllUsers")]
        public IActionResult Index()
        {
            return View();
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("/GetTopCustomers")]
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
    }
}
