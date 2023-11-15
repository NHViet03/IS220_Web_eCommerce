using DreamTech_Ecommerce.DAL;
using DreamTech_Ecommerce.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace DreamTech_Ecommerce.Controllers
{
    public class LoginViewModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
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

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginViewModel model)
        {
            var user = _context
                .Users
                .Where(e => e.Email == model.Email && e.Password == model.Password)
                .ToArray();

            if (user.Length > 0)
            {
                var resJson = new { Token = this.GenerateJwtToken(user[0]) };
                return Ok(resJson);
            }

            var errorJson = new { Error = "Email hoặc mật khẩu không hợp lệ", StatusCode = 401 };
            return BadRequest(errorJson);
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
                    new Claim("Id", Guid.NewGuid().ToString()),
                    new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                    new Claim(JwtRegisteredClaimNames.Email, user.Email),
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
    } 
}
