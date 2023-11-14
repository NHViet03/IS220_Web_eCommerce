using System;
using System.Collections.Generic;

namespace DreamTech_Ecommerce.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}
    