using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DreamTech_Ecommerce.Models
{
    public class Category
    {
        [Key]
        public string Id { get; set; }
        public string Name { get; set; }
        public ICollection<Product> Products { get; } = new List<Product>();
    }
}
    