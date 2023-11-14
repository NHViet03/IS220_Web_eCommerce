using DreamTech_Ecommerce.Models;
using Microsoft.EntityFrameworkCore;

namespace DreamTech_Ecommerce.DAL
{
    public class DreamAppContext: DbContext
    {
        public DreamAppContext(DbContextOptions<DreamAppContext> options)
        : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Specification> Specifications { get; set; }
        public DbSet<Promotion> Promotions { get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<PaymentMethod> PaymentMethods { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Declare relationship between table in EF
            modelBuilder.Entity<Cart>()
                .HasOne(e => e.User)
                .WithMany(e => e.Carts)
                .HasForeignKey(e => e.UserId)
                .IsRequired(false);

            modelBuilder.Entity<Order>()
                .HasOne(e => e.User)
                .WithMany(e => e.Orders)
                .HasForeignKey(e => e.UserId)
                .IsRequired(false);

            modelBuilder.Entity<Product>()
                .HasOne(e => e.Category)
                .WithMany(e => e.Products)
                .HasForeignKey(e => e.CategoryId)
                .IsRequired(false);

            modelBuilder.Entity<Cart>()
                .HasOne(e => e.Product)
                .WithMany(e => e.Carts)
                .HasForeignKey(e => e.ProductId)
                .IsRequired();

            modelBuilder.Entity<ProductImage>()
                .HasOne(e => e.Product)
                .WithMany(e => e.ProductImages)
                .HasForeignKey(e => e.ProductId)
                .IsRequired();

            modelBuilder.Entity<Specification>()
                .HasOne(e => e.Product)
                .WithMany(e => e.Specifications)
                .HasForeignKey(e => e.ProductId)
                .IsRequired();

            modelBuilder.Entity<Promotion>()
                .HasOne(e => e.Product)
                .WithMany(e => e.Promotions)
                .HasForeignKey(e => e.ProductId)
                .IsRequired();

            modelBuilder.Entity<OrderDetail>()
                .HasOne(e => e.Product)
                .WithMany(e => e.OrderDetails)
                .HasForeignKey(e => e.ProductId)
                .IsRequired();

            modelBuilder.Entity<OrderDetail>()
                .HasOne(e => e.Order)
                .WithMany(e => e.OrderDetails)
                .HasForeignKey(e => e.OrderId)
                .IsRequired();

            modelBuilder.Entity<Payment>()
                .HasOne(e => e.Order)
                .WithMany(e => e.Payments)
                .HasForeignKey(e => e.OrderId)
                .IsRequired();

            modelBuilder.Entity<Payment>()
                .HasOne(e => e.PaymentMethod)
                .WithMany(e => e.Payments)
                .HasForeignKey(e => e.PaymentMethodId)
                .IsRequired();

            base.OnModelCreating(modelBuilder);
        }
    }
}
