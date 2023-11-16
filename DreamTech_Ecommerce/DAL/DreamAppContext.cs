using DreamTech_Ecommerce.Models;
using DreamTech_Ecommerce.Utils;
using Microsoft.EntityFrameworkCore;

namespace DreamTech_Ecommerce.DAL
{
    public class DreamAppContext: DbContext
    {
        public DreamAppContext()
        {
        }

        public DreamAppContext(DbContextOptions<DreamAppContext> options)
        : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductImage> ProductImages { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<CartItem> CartItems { get; set; }
        public DbSet<Discount> Discounts { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<PaymentMethod> PaymentMethods { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Declare relationship between table in EF
            modelBuilder.Entity<CartItem>()
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

            modelBuilder.Entity<CartItem>()
                .HasOne(e => e.Product)
                .WithMany(e => e.Carts)
                .HasForeignKey(e => e.ProductId)
                .IsRequired();

            modelBuilder.Entity<ProductImage>()
                .HasOne(e => e.Product)
                .WithMany(e => e.ProductImages)
                .HasForeignKey(e => e.ProductId)
                .IsRequired();

            modelBuilder.Entity<Order>()
                .HasOne(e => e.Discount)
                .WithMany(e => e.Orders)
                .HasForeignKey(e => e.DiscountId)
                .IsRequired();

            modelBuilder.Entity<OrderItem>()
                .HasOne(e => e.Product)
                .WithMany(e => e.OrderItems)
                .HasForeignKey(e => e.ProductId)
                .IsRequired();

            modelBuilder.Entity<OrderItem>()
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


            var salt = PasswordHasher.GenerateSalt();
            var hashedPassword = PasswordHasher.HashPassword("adminvip123", salt);
            modelBuilder.Entity<User>().HasData(
            new User
            {
                Id = 1,
                FirstName = "Admin",
                LastName = "User",
                Role = Role.Admin,
                Email = "admin@test.com",
                Phone = "123-456-7890",
                HashedPassword = hashedPassword,
                Salt = salt
            });

            base.OnModelCreating(modelBuilder);
        }
    }
}
