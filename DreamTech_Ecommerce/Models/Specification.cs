namespace DreamTech_Ecommerce.Models
{
    public class Specification
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
        public virtual Product Product { get; set; }
    }
}
