namespace DreamTech_Ecommerce.Models
{
    public class Cart
    {
        public int Id { get; set; }
        public int Qty { get; set; }
        public int ProductId { get; set; }
        public virtual Product Product { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }
    }
}
