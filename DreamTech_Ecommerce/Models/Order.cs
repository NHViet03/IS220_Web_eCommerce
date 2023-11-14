using System;
using System.Collections.Generic;

namespace DreamTech_Ecommerce.Models
{
    public enum OrderStatus
    {
        Pending = 0, Failed = 1, Completed = 2 
    }
    public class Order
    {
        public int Id { get; set; }
        public int Qty { get; set; }
        public OrderStatus OrderStatus { get; set; }
        public DateTime OrderDate { get; set; }
        public int TotalAmount { get; set; }
        public string ShippingAddress { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
        public virtual ICollection<Payment> Payment { get; set; }
    }
}
