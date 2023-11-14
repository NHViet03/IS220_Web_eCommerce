namespace DreamTech_Ecommerce.Models
{
    public class Payment
    {
        public int Id { get; set; }
        public DateTime PaymentDate { get; set; }
        public int Amount { get; set; }
        public int OrderId { get; set; }
        public virtual Order Order { get; set; }
        public int PaymentMethodId { get; set; }
        public virtual PaymentMethod PaymentMethod { get; set; }
    }
}
