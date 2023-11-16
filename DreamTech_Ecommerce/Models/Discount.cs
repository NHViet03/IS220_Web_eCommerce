using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DreamTech_Ecommerce.Models
{
    public class Discount
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string DiscountRate { get; set; }
        public ICollection<Order> Orders { get; } = new List<Order>();
    }
}
