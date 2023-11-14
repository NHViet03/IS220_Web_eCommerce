namespace DreamTech_Ecommerce.Models
{
    public class PaymentMethod
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Payment> Payments { get; set; }
    }
}
