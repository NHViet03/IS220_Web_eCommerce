using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DreamTech_Ecommerce.Models
{
    public class OrderItem
    {
        [Key]
        public int Id { get; set; }
        public int Qty { get; set; }
        public string ShippingAddress { get; set; }

        [Required]
        [ForeignKey("Product")]
        public int ProductId { get; set; }
        public Product Product { get; set; }

        [Required]
        [ForeignKey("Order")]
        public int OrderId { get; set; }
        public Order Order { get; set; }
    }
}
