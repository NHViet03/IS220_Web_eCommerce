using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DreamTech_Ecommerce.Models
{
    public class Product
    {
        [Key]
        public string Id { get; set; }
        public string? Brand { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public int Price { get; set; }
        public int? SalePrice { get; set; }
        public String? Cpu { get; set; }
        public String? Ram { get; set; }
        public String? Disk { get; set; }
        public String? Vga { get; set; }
        public String? Screen { get; set; }
        public String? Color { get; set; }
        public String? Size { get; set; }
        public String? Weight { get; set; }
        public String? Battery { get; set; }
        public int QtyInStock { get; set; }

        [ForeignKey("Category")]
        public string? CategoryId { get; set; }
        public Category? Category { get; set; }
        public ICollection<ProductImage> ProductImages { get; } = new List<ProductImage>();
        public ICollection<CartItem> Carts { get; } = new List<CartItem>();
        public ICollection<OrderItem> OrderItems { get; } = new List<OrderItem>();
        public ICollection<Gift> Gifts { get; } = new List<Gift>();
    }
}
