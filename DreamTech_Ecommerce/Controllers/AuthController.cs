using DreamTech_Ecommerce.DAL;
using DreamTech_Ecommerce.Models;
using DreamTech_Ecommerce.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace DreamTech_Ecommerce.Controllers
{
    public class LoginViewModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
    public class SignUpViewModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string Phone { get; set; }
    }

    [ApiController]
    [Route("[controller]")]
    public class AuthController : Controller
    {
        private readonly DreamAppContext _context;
        private readonly IConfiguration _configuration;
        public AuthController(DreamAppContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost("Login")]
        public IActionResult Login([FromBody] LoginViewModel model)
        {
            var user = _context
                .Users
                .Where(e => e.Email == model.Email)
                .FirstOrDefault();

            if (user != null && user.HashedPassword == PasswordHasher.HashPassword(model.Password, user.Salt))
            {
                var resJson = new { Token = this.GenerateJwtToken(user), User = user };
                return Ok(resJson);
            }

            var errorJson = new { ErrorMessage = "Email hoặc mật khẩu không hợp lệ", StatusCode = 401 };
            return BadRequest(errorJson);
        }

        [HttpPost("LogOut")]
        public IActionResult Logout()
        {
            // Optional: Delete token or set it to expired

            return Ok(new { Message = "Đăng xuất thành công" });
        }

        [HttpPost("SignUp")]
        public IActionResult SignUp([FromBody] SignUpViewModel model)
        {
            // Optional: Validate password

            var user = _context
                .Users
                .Where(e => e.Email == model.Email)
                .FirstOrDefault();

            if (user != null)
            {
                return BadRequest(new { ErrorMessage = "Email hoặc số điện thoại đã được đăng ký!" });
            }

            try
            {
                var newUser = this.CreateUserFromViewModel(model);

                _context.Users.Add(newUser);
                _context.SaveChanges();

                return Ok(new { Token = this.GenerateJwtToken(newUser), User = newUser }); ;
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        private string GenerateJwtToken(User user)
        {
            var key = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);
            var issuer = _configuration["Jwt:Issuer"];
            var audience = _configuration["Jwt:Audience"];
            var userRole = user.Role == Role.Customer ? "Customer" : "Admin";

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim("Id", user.Id.ToString()),
                    new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                    new Claim(JwtRegisteredClaimNames.Email, user.Email),
                    new Claim(JwtRegisteredClaimNames.Name, user.FirstName + " "+user.LastName),
                    new Claim(JwtRegisteredClaimNames.Jti,
                    Guid.NewGuid().ToString()),
                    new Claim(ClaimTypes.Role, userRole),


                }),

                Expires = DateTime.UtcNow.AddMinutes(10000),
                Issuer = issuer,
                Audience = audience,
                SigningCredentials = new SigningCredentials
                (new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha512Signature)
            };

            var jwtTokenHandler = new JwtSecurityTokenHandler();

            var token = jwtTokenHandler.CreateToken(tokenDescriptor);

            var jwtToken = jwtTokenHandler.WriteToken(token);

            return jwtToken;
        }

        private User CreateUserFromViewModel(SignUpViewModel model)
        {
            var salt = PasswordHasher.GenerateSalt();
            return new User
            {
                Email = model.Email,
                HashedPassword = PasswordHasher.HashPassword(model.Password, salt),
                FirstName = model.FirstName,
                LastName = model.LastName,
                Phone = model.Phone,
                Role = Role.Customer,
                Salt = salt
            };
        }
    }
}
