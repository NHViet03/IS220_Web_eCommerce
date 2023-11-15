namespace DreamTech_Ecommerce.Models
{
    public class LoginToken
    {
        public int Id { get; set; }
        public string Token { get; set; }
        public DateTime Expiration { get; set; }
    }
}
