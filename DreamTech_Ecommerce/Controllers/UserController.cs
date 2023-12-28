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

        [Authorize]
        [HttpGet("GetCustomerDetail/{Id}")]
        public IActionResult GetCustomerDetail(int Id)
        {
            try
            {
                var userIdClaim = HttpContext.User.Claims.FirstOrDefault(c => c.Type == "Id");
                var roleClaim = HttpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimsIdentity.DefaultRoleClaimType);

                if (userIdClaim == null || !int.TryParse(userIdClaim.Value, out int userId))
                {
                    return BadRequest("Unable to retrieve user ID from the token");
                }

                // Check if the user is an admin
                bool isAdmin = roleClaim != null && roleClaim.Value == "Admin";

                if (!isAdmin && userId != Id)
                {
                    return Forbid("You don't have permission to access this resource");
                }

                var customer = _context.Users
                    .Include(u => u.Orders)
                    .ThenInclude(o => o.OrderDetails)
                        .ThenInclude(od => od.Product)
                            .ThenInclude(pro => pro.ProductImages)
                    .FirstOrDefault(u => u.Id == Id);

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

        [Authorize]
        [HttpPut("UpdateUserInfo/{userId}")]
        public IActionResult UpdateUserInfo(int userId, [FromBody] UpdateUserDto updateUserDto)
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
                    return Forbid("You don't have permission to update this user's information");
                }

                var userToUpdate = _context.Users.FirstOrDefault(u => u.Id == userId);

                if (userToUpdate == null)
                {
                    return NotFound("User not found.");
                }

                userToUpdate.FirstName = updateUserDto.FirstName;
                userToUpdate.LastName = updateUserDto.LastName;
                userToUpdate.Email = updateUserDto.Email;
                userToUpdate.Phone = updateUserDto.Phone;
                userToUpdate.Gender = updateUserDto.Gender;
                userToUpdate.Birthday = updateUserDto.Birthday;

                _context.SaveChanges();

                return Ok("User information updated successfully");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost("CreateCustomer")]
        [Authorize(Roles = "Admin")]
        public IActionResult CreateCustomer([FromBody] UpdateUserDto model)
        {
            try
            {
                var newCustomer = new User()
                {
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Email = model.Email,
                    Phone = model.Phone,
                    Gender = model.Gender,
                    Birthday = model.Birthday,
                    Address = model.ShippingAddress
                };

                _context.Users.Add(newCustomer);
                _context.SaveChanges();

                return Ok("Created new customer");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("GetStatistics")]
        public IActionResult GetStatistics([FromQuery] string interval = "7d")
        {
            try
            {
                DateTime startDate;
                DateTime endDate = DateTime.Now;

                // Calculate the start date based on the specified interval
                switch (interval)
                {
                    case "1m":
                        startDate = endDate.AddMonths(-1);
                        break;
                    case "1y":
                        startDate = endDate.AddYears(-1);
                        break;
                    case "7d":
                    default:
                        startDate = endDate.AddDays(-7);
                        break;
                }

                // 1. Total Revenue
                var totalRevenueCurrent = _context.Orders
                    .Where(o => o.OrderStatus == OrderStatus.Completed && o.OrderDate >= startDate && o.OrderDate <= endDate)
                    .Sum(o => o.TotalAmount);

                var totalRevenuePrevious = _context.Orders
                    .Where(o => o.OrderStatus == OrderStatus.Completed && o.OrderDate >= startDate.AddDays(-GetDaysEquivalent(interval)) && o.OrderDate <= endDate.AddDays(-GetDaysEquivalent(interval)))
                    .Sum(o => o.TotalAmount);

                var revenueChangePercentage = CalculatePercentageChange(totalRevenuePrevious, totalRevenueCurrent);

                // 2. Total Number of Orders
                var totalOrdersCurrent = _context.Orders
                    .Where(o => o.OrderDate >= startDate && o.OrderDate <= endDate)
                    .Count();

                var totalOrdersPrevious = _context.Orders
                    .Where(o => o.OrderDate >= startDate.AddDays(-GetDaysEquivalent(interval)) && o.OrderDate <= endDate.AddDays(-GetDaysEquivalent(interval)))
                    .Count();

                var ordersChangePercentage = CalculatePercentageChange(totalOrdersPrevious, totalOrdersCurrent);

                // 3. Number of Products
                var totalProductsCurrent = _context.Products.Count();

                // 4. Number of New Customers
                var newCustomersCurrent = _context.Users
                    .Where(u => u.CreatedDate >= startDate && u.CreatedDate <= endDate)
                    .Count();

                var newCustomersPrevious = _context.Users
                    .Where(u => u.CreatedDate >= startDate.AddDays(-GetDaysEquivalent(interval)) && u.CreatedDate <= endDate.AddDays(-GetDaysEquivalent(interval)))
                    .Count();

                var newCustomersChangePercentage = CalculatePercentageChange(newCustomersPrevious, newCustomersCurrent);

                var result = new
                {
                    TotalRevenue = new
                    {
                        Current = totalRevenueCurrent,
                        Previous = totalRevenuePrevious,
                        ChangePercentage = revenueChangePercentage
                    },
                    TotalOrders = new
                    {
                        Current = totalOrdersCurrent,
                        Previous = totalOrdersPrevious,
                        ChangePercentage = ordersChangePercentage
                    },
                    TotalProducts = new
                    {
                        Current = totalProductsCurrent,
                        ChangePercentage = new Random().Next(1, 10)
                    },
                    NewCustomers = new
                    {
                        Current = newCustomersCurrent,
                        Previous = newCustomersPrevious,
                        ChangePercentage = newCustomersChangePercentage
                    }
                };

                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        private double? CalculatePercentageChange(int previousValue, int currentValue)
        {
            if (previousValue == 0)
            {
                return null;
            }

            return ((double)currentValue - previousValue) / previousValue * 100;
        }

        private double? CalculatePercentageChange(decimal previousValue, decimal currentValue)
        {
            if (previousValue == currentValue) {
                return 0;
            }
            if (previousValue == 0)
            {
                return null;
            }

            return (double)((currentValue - previousValue) / previousValue * 100);
        }

        private int GetDaysEquivalent(string interval)
        {
            switch (interval)
            {
                case "1m":
                    return 30; 
                case "1y":
                    return 365;
                case "7d":
                default:
                    return 7;
            }
        }

    }

    public class UpdateUserDto
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public int? Gender { get; set; }
        public DateTime? Birthday { get; set; }
        public string? ShippingAddress { get; set; }
    }

}
