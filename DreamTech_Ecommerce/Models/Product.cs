namespace DreamTech_Ecommerce.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string? Brand { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public int Price { get; set; }
        public int Qty { get; set; }
        public virtual Category? Category { get; set; } = null;
        public virtual Category? Category { get; set; } = null;
        public virtual ICollection<Specification> Specifications { get; set; } = null;
        public virtual ICollection<ProductImage> ProductImages { get; set; } = null;
        public virtual ICollection<Cart> Carts { get; set; } = null;
        public virtual ICollection<Promotion> Promotions { get; set; } = null;
    }
}
