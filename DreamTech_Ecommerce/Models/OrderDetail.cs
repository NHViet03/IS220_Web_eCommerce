namespace DreamTech_Ecommerce.Models
{
    public class OrderDetail
    {
        public int Id { get; set; }
        public int Qty { get; set; }
        public string ShippingAddress { get; set; }
        public int ProductId { get; set; }
        public virtual Product Product { get; set; }
        public int OrderId { get; set; }
        public virtual Order Order { get; set; }
    }
}
