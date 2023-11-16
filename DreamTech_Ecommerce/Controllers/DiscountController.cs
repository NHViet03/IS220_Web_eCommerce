using DreamTech_Ecommerce.DAL;
using DreamTech_Ecommerce.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DreamTech_Ecommerce.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize(Roles = "Admin")]
    public class DiscountController : Controller
    {
        private readonly DreamAppContext _context;
        public DiscountController(DreamAppContext context)
        {
            _context = context;
        }

        [HttpGet("/GetAll")]
        public ActionResult Index()
        {
            var discounts = _context.Discounts.ToList();
            return Ok(discounts);
        }

        [HttpGet("/GetById/{id}")]
        public ActionResult Details(int id)
        {
            var discount = _context.Categories.Find(id);
            return Ok(discount);
        }

        [HttpPost("/Create")]
        public ActionResult Create([FromBody] DiscountViewModel model)
        {
            var discount = new Discount()
            {
                Name = model.Name,
                DiscountRate = model.DiscountRate,
            };

            try
            {
                _context.Discounts.Add(discount);
                _context.SaveChanges();
                return Ok(new { Message = "Giảm giá áp dụng thành công" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("/Edit/{id}")]
        public ActionResult Edit(int id, [FromBody] DiscountViewModel model)
        {
            var discount = _context.Discounts.Find(id);
            
            if (discount == null)
            {
                return NotFound(new { ErrorMessage = "Không tìm thấy giảm giá trong database" });
            }

            try
            {
                discount.Name = model.Name;
                discount.DiscountRate = model.DiscountRate;
                _context.SaveChanges();
                return Ok("Cập nhật giảm giá thành công");
            }
            catch (DbUpdateException)
            {
                return BadRequest("Error updating entity");
            }
        }

        [HttpDelete("/Delete/{id}")]
        public ActionResult Delete(int id)
        {
            var discount = _context.Discounts.Find(id);

            if (discount == null)
            {
                return NotFound(new { ErrorMessage = "Không tìm thấy giảm giá" });
            }

            _context.Discounts.Remove(discount);
            _context.SaveChanges();

            return Ok(new { Message = "Xóa giảm giá thành công" });
        }
    }

    public class DiscountViewModel
    {
        public string Name { get; set; }
        public string DiscountRate { get; set; }
    }
}
