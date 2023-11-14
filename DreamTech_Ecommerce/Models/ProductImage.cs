namespace DreamTech_Ecommerce.Models
{
    public class Specification
    {
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public virtual Product Product { get; set; }
    }
}
