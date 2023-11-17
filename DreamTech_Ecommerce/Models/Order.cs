using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace DreamTech_Ecommerce.Models
{
    public enum OrderStatus
    {
        Pending = 0, Failed = 1, Completed = 2 
    }
    public class Order
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int Qty { get; set; }
        public OrderStatus OrderStatus { get; set; }
        public DateTime OrderDate { get; set; }
        public int TotalAmount { get; set; }
        public string ShippingAddress { get; set; }

        [Required]
        [ForeignKey("User")]
        public int UserId { get; set; }
        public User User { get; set; }
        
        [ForeignKey("Discount")]
        public int? DiscountId { get; set; }
        public Discount? Discount { get; set; }
        public ICollection<OrderItem> OrderDetails { get; } = new List<OrderItem>();
        public ICollection<Payment> Payments { get; } = new List<Payment>();
    }
}
