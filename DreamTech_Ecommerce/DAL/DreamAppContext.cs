using DreamTech_Ecommerce.Models;
using DreamTech_Ecommerce.Utils;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;

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
        public DbSet<Gift> Gifts { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<PaymentMethod> PaymentMethods { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ProductImage>()
                .Property(p => p.Id)
                .ValueGeneratedOnAdd();

            modelBuilder.Entity<Gift>()
                .Property(p => p.Id)
                .ValueGeneratedOnAdd();

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

            modelBuilder.Entity<Product>()
                .HasMany(p => p.Gifts)
                .WithOne(g => g.Product)
                .HasForeignKey(g => g.ProductId)
                .IsRequired();

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
                .IsRequired(false);

            modelBuilder.Entity<OrderItem>()
                .HasOne(e => e.Product)
                .WithMany(e => e.OrderItems)
                .HasForeignKey(e => e.ProductId)
                .IsRequired();

            modelBuilder.Entity<OrderItem>()
                .HasOne(e => e.Order)
                .WithMany(e => e.OrderDetails)
                .HasForeignKey(e => e.OrderId)
                .IsRequired(false);

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

            // Seed Users
            var salt = PasswordHasher.GenerateSalt();
            var hashedPassword = PasswordHasher.HashPassword("adminvip123", salt);
            var hashedUserPassword = PasswordHasher.HashPassword("test@1234", salt);
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
                },
                new User
                {
                    Id = 2,
                    FirstName = "Tony",
                    LastName = "Stark",
                    Role = Role.Customer,
                    Email = "tony.stark@email.com",
                    Phone = "091-456-7890",
                    Birthday = RandomGenerator.GenerateRandomDateTime(1960, 2016),
                    CreatedDate = RandomGenerator.GenerateRandomDateTime(),
                    HashedPassword = hashedUserPassword,
                    Salt = salt
                },
                new User
                {
                    Id = 3,
                    FirstName = "Steve",
                    LastName = "Rogers",
                    Role = Role.Customer,
                    Email = "steve.rogers@email.com",
                    Phone = "091-123-4567",
                    Birthday = RandomGenerator.GenerateRandomDateTime(1960, 2016),
                    CreatedDate = RandomGenerator.GenerateRandomDateTime(),
                    HashedPassword = hashedUserPassword,
                    Salt = salt
                },
                new User
                {
                    Id = 4,
                    FirstName = "Natasha",
                    LastName = "Romanoff",
                    Role = Role.Customer,
                    Email = "natasha.romanoff@email.com",
                    Phone = "091-789-0123",
                    Birthday = RandomGenerator.GenerateRandomDateTime(1960, 2016),
                    CreatedDate = RandomGenerator.GenerateRandomDateTime(),
                    HashedPassword = hashedUserPassword,
                    Salt = salt
                },
                new User
                {
                    Id = 5,
                    FirstName = "Bruce",
                    LastName = "Banner",
                    Role = Role.Customer,
                    Email = "bruce.banner@email.com",
                    Phone = "091-234-5678",
                    Birthday = RandomGenerator.GenerateRandomDateTime(1960, 2016),
                    CreatedDate = RandomGenerator.GenerateRandomDateTime(),
                    HashedPassword = hashedUserPassword,
                    Salt = salt
                },
                new User
                {
                    Id = 6,
                    FirstName = "Thor",
                    LastName = "Odinson",
                    Role = Role.Customer,
                    Email = "thor.odinson@email.com",
                    Phone = "091-678-9012",
                    Birthday = RandomGenerator.GenerateRandomDateTime(1960, 2016),
                    CreatedDate = RandomGenerator.GenerateRandomDateTime(),
                    HashedPassword = hashedUserPassword,
                    Salt = salt
                },
                new User
                {
                    Id = 7,
                    FirstName = "Peter",
                    LastName = "Parker",
                    Role = Role.Customer,
                    Email = "peter.parker@email.com",
                    Phone = "091-345-6789",
                    Birthday = RandomGenerator.GenerateRandomDateTime(1960, 2016),
                    CreatedDate = RandomGenerator.GenerateRandomDateTime(),
                    HashedPassword = hashedUserPassword,
                    Salt = salt
                },
                new User
                {
                    Id = 8,
                    FirstName = "Wanda",
                    LastName = "Maximoff",
                    Role = Role.Customer,
                    Email = "wanda.maximoff@email.com",
                    Phone = "091-987-6543",
                    Birthday = RandomGenerator.GenerateRandomDateTime(1960, 2016),
                    CreatedDate = RandomGenerator.GenerateRandomDateTime(),
                    HashedPassword = hashedUserPassword,
                    Salt = salt
                },
                new User
                {
                    Id = 9,
                    FirstName = "Scott",
                    LastName = "Lang",
                    Role = Role.Customer,
                    Email = "scott.lang@email.com",
                    Phone = "091-567-8901",
                    Birthday = RandomGenerator.GenerateRandomDateTime(1960, 2016),
                    CreatedDate = RandomGenerator.GenerateRandomDateTime(),
                    HashedPassword = hashedUserPassword,
                    Salt = salt
                },
                new User
                {
                    Id = 10,
                    FirstName = "Diana",
                    LastName = "Prince",
                    Role = Role.Customer,
                    Email = "diana.prince@email.com",
                    Phone = "091-123-4567",
                    Birthday = RandomGenerator.GenerateRandomDateTime(1960, 2016),
                    CreatedDate = RandomGenerator.GenerateRandomDateTime(),
                    HashedPassword = hashedUserPassword,
                    Salt = salt
                });
            for (int i = 11; i < 100; i++)
            {
                var firstName = RandomGenerator.GenerateRandomFirstName();
                var lastName = RandomGenerator.GenerateRandomLastName();

                modelBuilder.Entity<User>().HasData(
                    new User
                    {
                        Id = i,
                        FirstName = firstName,
                        LastName = lastName,
                        Role = Role.Customer,
                        Email = RandomGenerator.GenerateRandomEmail(firstName, lastName),
                        Phone = RandomGenerator.GenerateRandomPhoneNumber(),
                        Birthday = RandomGenerator.GenerateRandomDateTime(1960, 2016),
                        CreatedDate = RandomGenerator.GenerateRandomDateTime(),
                        HashedPassword = hashedUserPassword,
                        Salt = salt
                    }    
                );
            }

            // Seed category
            modelBuilder.Entity<Category>().HasData(
                new Category { Id = "laptop", Name = "Laptop" },
                new Category { Id = "laptop-gaming", Name = "Laptop Gaming" },
                new Category { Id = "pc", Name = "PC" },
                new Category { Id = "apple", Name = "Apple" },
                new Category { Id = "main-cpu-vga", Name = "Main - CPU - VGA" },
                new Category { Id = "man-hinh", Name = "Màn hình" },
                new Category { Id = "ban-phim", Name = "Bàn phím" },
                new Category { Id = "chuot-lot-chuot", Name = "Chuột - Lót chuột" },
                new Category { Id = "phu-kien", Name = "Phụ kiện" },
                new Category { Id = "phan-mem-mang", Name = "Phần mềm + Mạng" },
                new Category { Id = "tai-nghe-loa", Name = "Tai nghe - Loa" }
            );

            Product[] productList = new Product[]
            {
                new Product
                {
                    Id = "laptop-asus-expertbook-b1400ceae-bv3186w",
                    Brand = "Asus",
                    Name = "Laptop Asus ExpertBook B1400CEAE BV3186W",
                    Description = "là một chiếc laptop văn phòng chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.",
                    Price = 14990000,
                    SalePrice = 8990000,
                    Cpu = "Intel Core i3-1115G4 3.0 GHz (6M Cache, up to 4.1 GHz, 2 cores)",
                    Ram = "12GB DDR4 3200MHz (4GB onboard + 8GB Gearvn tặng)\r\nNâng cấp tối đa 36GB",
                    Disk = "256GB PCIE G3 SSD (Còn trống 1 khe 2.5\" HDD up to 1TB)",
                    Vga = "Intel® UHD Graphics",
                    Screen = "14.0 HD (1366X768) 16:9 220nits, Anti-Glare NTSC:45% ",
                    Color = "Black",
                    Size = "32.34 x 21.56 x 1.92 ~ 1.92 cm",
                    Weight = "1.45 kg",
                    Battery = "42WHrs, 3S1P, 3-cell Li-ion",
                    QtyInStock = 10,
                    CategoryId = "laptop",
                },
                // Laptop Gaming
                new Product
                {
                    Id = "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn",
                    Brand = "MSI",
                    Name = "Laptop Gaming MSI Stealth 16 Mercedes AMG A13VG 289VN",
                    Description = "là một chiếc laptop gaming chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.",
                    Price = 80990000,
                    SalePrice = 74990000,
                    Cpu = "Intel Core i9-13900H 4.1GHz up to 5.4GHz, 14 Cores 20 Threads ,24MB Cache",
                    Ram = "32GB (16x2) DDR5 5200MHz (2x SO-DIMM socket, up to 64GB SDRAM)",
                    Disk = "2TB SSD PCIE G4X4 (2 slots M.2 NVMe PCIe Gen4)",
                    Vga = "NVIDIA® GeForce RTX™ 4070 8GB GDDR6 + MUX Switch",
                    Screen = "16\" UHD+ (3840x2400), 16:10, 100% DCI-P3, OLED, DisplayHDR True Black 600",
                    Color = "Selenite Gray",
                    Size = "355.8 x 259.7 x 19.95 (mm)",
                    Weight = "1.88 kg",
                    Battery = "4 Cell 99.9WHrs",
                    QtyInStock = 10,
                    CategoryId = "laptop-gaming",
                },
                new Product
                {
                    Id = "laptop-gaming-msi-gf63-12ucx-841vn",
                    Brand = "MSI",
                    Name = "Laptop gaming MSI GF63 12UCX 841VN",
                    Description = "là một chiếc laptop gaming chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.",
                    Price = 17990000,
                    SalePrice = 15990000,
                    Cpu = "Intel Core i5-12450H 3.3GHz up to 4.40GHz 12MB, 8 nhân, 12 luồng",
                    Ram = "8GB (8x1) DDR4 3200MHz (2x SO-DIMM socket, up to 64GB SDRAM)",
                    Disk = "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)",
                    Vga = "Nvidia Geforce RTX 2050 4GB GDDR6",
                    Screen = "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC",
                    Color = "Silver",
                    Size = "359 x 254 x 21.5 mm",
                    Weight = "1.86 kg",
                    Battery = "3 Cell 52.4 WHr",
                    QtyInStock = 10,
                    CategoryId = "laptop-gaming",
                },
                new Product
                {
                    Id = "laptop-gaming-msi-gf63-12uc-887vn",
                    Brand = "MSI",
                    Name = "Laptop gaming MSI GF63 12UC 887VN",
                    Description = "là một chiếc laptop gaming chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.",
                    Price = 20990000,
                    SalePrice = 19790000,
                    Cpu = "Intel Core i5-12450H 3.3GHz up to 4.40GHz 12MB, 8 nhân, 12 luồng",
                    Ram = "8GB (8x1) DDR4 3200MHz (2x SO-DIMM socket, up to 64GB SDRAM)",
                    Disk = "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)",
                    Vga = "Nvidia Geforce RTX 2050 4GB GDDR6",
                    Screen = "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC",
                    Color = "Silver",
                    Size = "359 x 254 x 21.5 mm",
                    Weight = "1.86 kg",
                    Battery = "3 Cell 52.4 WHr",
                    QtyInStock = 10,
                    CategoryId = "laptop-gaming",
                },
                new Product
                {
                    Id = "laptop-gaming-lenovo-legion-slim-5-16irh8-82ya00buvn",
                    Brand = "Lenovo",
                    Name = "Laptop gaming Lenovo Legion Slim 5 16IRH8 82YA00BUVN",
                    Description = "là một chiếc laptop gaming chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.",
                    Price = 43990000,
                    SalePrice = 41990000,
                    Cpu = "Intel Core i5-12450H 3.3GHz up to 4.40GHz 12MB, 8 nhân, 12 luồng",
                    Ram = "8GB (8x1) DDR4 3200MHz (2x SO-DIMM socket, up to 64GB SDRAM)",
                    Disk = "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)",
                    Vga = "Nvidia Geforce RTX 2050 4GB GDDR6",
                    Screen = "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC",
                    Color = "Silver",
                    Size = "359 x 254 x 21.5 mm",
                    Weight = "1.86 kg",
                    Battery = "3 Cell 52.4 WHr",
                    QtyInStock = 10,
                    CategoryId = "laptop-gaming",
                },
                new Product
                {
                    Id = "laptop-gaming-lenovo-loq-15irh8-82xv00qqvn",
                    Brand = "Lenovo",
                    Name = "Laptop gaming Lenovo LOQ 15IRH8 82XV00QQVN",
                    Description = "là một chiếc laptop gaming chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.",
                    Price = 20990000,
                    SalePrice = 18990000,
                    Cpu = "Intel Core i5-12450H 3.3GHz up to 4.40GHz 12MB, 8 nhân, 12 luồng",
                    Ram = "8GB (8x1) DDR4 3200MHz (2x SO-DIMM socket, up to 64GB SDRAM)",
                    Disk = "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)",
                    Vga = "Nvidia Geforce RTX 2050 4GB GDDR6",
                    Screen = "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC",
                    Color = "Silver",
                    Size = "359 x 254 x 21.5 mm",
                    Weight = "1.86 kg",
                    Battery = "3 Cell 52.4 WHr",
                    QtyInStock = 10,
                    CategoryId = "laptop-gaming",
                },
                new Product
                {
                    Id = "laptop-gaming-acer-predator-helios-300-ph315-55-76kg",
                    Brand = "Acer Predato",
                    Name = "Laptop gaming Acer Predator Helios 300 PH315 55 76KG",
                    Description = "là một chiếc laptop gaming chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.",
                    Price = 48490000,
                    SalePrice = 30990000,
                    Cpu = "Intel Core i5-12450H 3.3GHz up to 4.40GHz 12MB, 8 nhân, 12 luồng",
                    Ram = "8GB (8x1) DDR4 3200MHz (2x SO-DIMM socket, up to 64GB SDRAM)",
                    Disk = "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)",
                    Vga = "Nvidia Geforce RTX 2050 4GB GDDR6",
                    Screen = "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC",
                    Color = "Silver",
                    Size = "359 x 254 x 21.5 mm",
                    Weight = "1.86 kg",
                    Battery = "3 Cell 52.4 WHr",
                    QtyInStock = 10,
                    CategoryId = "laptop-gaming",
                },
                new Product
                {
                    Id = "laptop-gaming-asus-tuf-a15-fa507nu-lp031w",
                    Brand = "ASUS",
                    Name = "Laptop gaming ASUS TUF A15 FA507NU LP031W",
                    Description = "là một chiếc laptop gaming chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.",
                    Price = 30490000,
                    SalePrice = 25990000,
                    Cpu = "R7-7735HS",
                    Ram = "16 GB",
                    Disk = "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)",
                    Vga = "Nvidia Geforce RTX 2050 4GB GDDR6",
                    Screen = "15.6 inch FHD",
                    Color = "Silver",
                    Size = "359 x 254 x 21.5 mm",
                    Weight = "1.86 kg",
                    Battery = "3 Cell 52.4 WHr",
                    QtyInStock = 10,
                    CategoryId = "laptop-gaming",
                },
                // PC
                new Product
                {
                    Id = "pc-gvn-amd-r5-7600-vga-rtx-4060",
                    Brand = "GVN",
                    Name = "PC GVN AMD R5-7600/ VGA RTX 4060",
                    Description = "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.",
                    Price = 26480000,
                    SalePrice = 25990000,
                    Cpu = "R5 7600",
                    Ram = "16GB",
                    Disk = "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)",
                    Vga = "Nvidia Geforce RTX 2050 4GB GDDR6",
                    Screen = "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC",
                    Color = "Silver",
                    Size = "359 x 254 x 21.5 mm",
                    Weight = "1.86 kg",
                    Battery = "3 Cell 52.4 WHr",
                    QtyInStock = 10,
                    CategoryId = "pc",
                },
                new Product
                {
                    Id = "pc-gvn-x-asus-evangelion-2",
                    Brand = "GVN",
                    Name = "PC GVN x ASUS EVANGELION 2",
                    Description = "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.",
                    Price = 130000000,
                    SalePrice = 125000000,
                    Cpu = "R5 7600",
                    Ram = "16GB",
                    Disk = "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)",
                    Vga = "Nvidia Geforce RTX 2050 4GB GDDR6",
                    Screen = "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC",
                    Color = "Silver",
                    Size = "359 x 254 x 21.5 mm",
                    Weight = "1.86 kg",
                    Battery = "3 Cell 52.4 WHr",
                    QtyInStock = 10,
                    CategoryId = "pc",
                },
                new Product
                {
                    Id = "pc-gvn-intel-i7-13700f-vga-rtx-4060-ti",
                    Brand = "GVN",
                    Name = "PC GVN Intel i7-13700F/ VGA RTX 4060 Ti",
                    Description = "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.",
                    Price = 33920000,
                    SalePrice = 33890000,
                    Cpu = "i7 13700F",
                    Ram = "16GB",
                    Disk = "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)",
                    Vga = "Nvidia Geforce RTX 2050 4GB GDDR6",
                    Screen = "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC",
                    Color = "Silver",
                    Size = "359 x 254 x 21.5 mm",
                    Weight = "1.86 kg",
                    Battery = "3 Cell 52.4 WHr",
                    QtyInStock = 10,
                    CategoryId = "pc",
                },
                new Product
                {
                    Id = "pc-gvn-intel-i5-13600kf-vga-rtx-3060",
                    Brand = "GVN",
                    Name = "PC GVN Intel i5-13600KF/ VGA RTX 3060",
                    Description = "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.",
                    Price = 29510000,
                    SalePrice = 28990000,
                    Cpu = "i5 13600KF",
                    Ram = "16GB",
                    Disk = "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)",
                    Vga = "RTX 3060",
                    Screen = "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC",
                    Color = "Silver",
                    Size = "359 x 254 x 21.5 mm",
                    Weight = "1.86 kg",
                    Battery = "3 Cell 52.4 WHr",
                    QtyInStock = 10,
                    CategoryId = "pc",
                },
                new Product
                {
                    Id = "pc-gvn-intel-i7-13700f-vga-rtx-4070",
                    Brand = "GVN",
                    Name = "PC GVN Intel i7-13700F/ VGA RTX 4070",
                    Description = "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.",
                    Price = 59990000,
                    SalePrice = 58990000,
                    Cpu = "i7 13700F",
                    Ram = "16GB",
                    Disk = "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)",
                    Vga = "RTX 4070",
                    Screen = "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC",
                    Color = "Silver",
                    Size = "359 x 254 x 21.5 mm",
                    Weight = "1.86 kg",
                    Battery = "3 Cell 52.4 WHr",
                    QtyInStock = 10,
                    CategoryId = "pc",
                },
                new Product
                {
                    Id = "pc-gvn-intel-i5-12400f-vga-rtx-4060",
                    Brand = "GVN",
                    Name = "PC GVN Intel i5-12400F/ VGA RTX 4060",
                    Description = "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.",
                    Price = 24990000,
                    SalePrice = 24490000,
                    Cpu = "i5 12400F",
                    Ram = "8GB",
                    Disk = "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)",
                    Vga = "RTX 4070",
                    Screen = "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC",
                    Color = "Silver",
                    Size = "359 x 254 x 21.5 mm",
                    Weight = "1.86 kg",
                    Battery = "3 Cell 52.4 WHr",
                    QtyInStock = 10,
                    CategoryId = "pc",
                },
                new Product
                {
                    Id = "pc-gvn-intel-i3-12100f-vga-gtx-1650",
                    Brand = "GVN",
                    Name = "PC GVN Intel i3-12100F/ VGA GTX 1650",
                    Description = "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.",
                    Price = 11590000,
                    SalePrice = 10890000,
                    Cpu = "i3 12100F",
                    Ram = "8GB",
                    Disk = "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)",
                    Vga = "GTX 1650",
                    Screen = "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC",
                    Color = "Silver",
                    Size = "359 x 254 x 21.5 mm",
                    Weight = "1.86 kg",
                    Battery = "3 Cell 52.4 WHr",
                    QtyInStock = 10,
                    CategoryId = "pc",
                },
                // Chuot va Lot chuot
                new Product
                {
                    Id = "chuot-logitech-g502-x-plus-lightspeed-white",
                    Brand = "Logitech",
                    Name = "Chuột Logitech G502 X Plus LightSpeed White",
                    Description = "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.",
                    Price = 3890000,
                    SalePrice = 3190000,
                    Cpu = "i3 12100F",
                    Ram = "8GB",
                    Disk = "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)",
                    Vga = "GTX 1650",
                    Screen = "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC",
                    Color = "Silver",
                    Size = "359 x 254 x 21.5 mm",
                    Weight = "1.86 kg",
                    Battery = "Pin sạc",
                    QtyInStock = 20,
                    CategoryId = "chuot-lot-chuot",
                },
                new Product
                {
                    Id = "chuot-razer-basilisk-v3",
                    Brand = "Logitech",
                    Name = "Chuột Razer Basilisk V3",
                    Description = "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.",
                    Price = 1990000,
                    SalePrice = 990000,
                    Cpu = "i3 12100F",
                    Ram = "8GB",
                    Disk = "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)",
                    Vga = "GTX 1650",
                    Screen = "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC",
                    Color = "Silver",
                    Size = "359 x 254 x 21.5 mm",
                    Weight = "1.86 kg",
                    Battery = "Không",
                    QtyInStock = 20,
                    CategoryId = "chuot-lot-chuot",
                },
                new Product
                {
                    Id = "chuot-logitech-g-pro-x-superlight-wireless-red",
                    Brand = "Logitech",
                    Name = "Chuột Logitech G Pro X Superlight Wireless Red",
                    Description = "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.",
                    Price = 3590000,
                    SalePrice = 2850000,
                    Cpu = "i3 12100F",
                    Ram = "8GB",
                    Disk = "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)",
                    Vga = "GTX 1650",
                    Screen = "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC",
                    Color = "Silver",
                    Size = "359 x 254 x 21.5 mm",
                    Weight = "1.86 kg",
                    Battery = "Pin sạc",
                    QtyInStock = 20,
                    CategoryId = "chuot-lot-chuot",
                },
                new Product
                {
                    Id = "chuot-logitech-g102-lightsync-black",
                    Brand = "Logitech",
                    Name = "Chuột Logitech G102 LightSync Black",
                    Description = "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.",
                    Price = 599000,
                    SalePrice = 399000,
                    Cpu = "i3 12100F",
                    Ram = "8GB",
                    Disk = "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)",
                    Vga = "GTX 1650",
                    Screen = "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC",
                    Color = "Silver",
                    Size = "359 x 254 x 21.5 mm",
                    Weight = "1.86 kg",
                    Battery = "Không",
                    QtyInStock = 20,
                    CategoryId = "chuot-lot-chuot",
                },
                new Product
                {
                    Id = "chuot-logitech-g304-wireless-white",
                    Brand = "Logitech",
                    Name = "Chuột Logitech G304 Wireless White",
                    Description = "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.",
                    Price = 1090000,
                    SalePrice = 780000,
                    Cpu = "i3 12100F",
                    Ram = "8GB",
                    Disk = "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)",
                    Vga = "GTX 1650",
                    Screen = "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC",
                    Color = "Silver",
                    Size = "359 x 254 x 21.5 mm",
                    Weight = "1.86 kg",
                    Battery = "Pin sạc",
                    QtyInStock = 20,
                    CategoryId = "chuot-lot-chuot",
                },
                new Product
                {
                    Id = "chuot-logitech-g304-wireless",
                    Brand = "Logitech",
                    Name = "Chuột Logitech G304 Wireless",
                    Description = "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.",
                    Price = 1090000,
                    SalePrice = 780000,
                    Cpu = "i3 12100F",
                    Ram = "8GB",
                    Disk = "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)",
                    Vga = "GTX 1650",
                    Screen = "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC",
                    Color = "Silver",
                    Size = "359 x 254 x 21.5 mm",
                    Weight = "1.86 kg",
                    Battery = "Pin rời",
                    QtyInStock = 20,
                    CategoryId = "chuot-lot-chuot",
                }
            };

            // Seed products
            modelBuilder.Entity<Product>().HasData(productList);

            // Seed cart items 
            modelBuilder.Entity<CartItem>().HasData(
                new CartItem { Id = 1, ProductId = "laptop-asus-expertbook-b1400ceae-bv3186w", UserId = 2, Qty = 2 },
                new CartItem { Id = 2, ProductId = "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn", UserId = 2, Qty = 4 }

            );

            // Seed gifts
            modelBuilder.Entity<Gift>().HasData(
                new Gift { Id = 1, ProductId = "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn", Type = 1, GiftName = "Màn hình MSI OPTIX MAG274QRX 27\" IPS 2K 240Hz G-Sync chuyên game", Value = 9390000 },
                new Gift { Id = 2, ProductId = "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn", Type = 1, GiftName = "Móc khóa Keycap GearVN", Value = 99000 },
                new Gift { Id = 3, ProductId = "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn", Type = 1, GiftName = "Áo khoác (bomber)", Value = 300000 },
                new Gift { Id = 4, ProductId = "laptop-asus-expertbook-b1400ceae-bv3186w", Type = 1, GiftName = "Áo khoác (bomber)", Value = 300000 }
            );

            // Seed product images
            modelBuilder.Entity<ProductImage>().HasData(
                new ProductImage { Id = 1, ProductId = "laptop-asus-expertbook-b1400ceae-bv3186w", ImageUrl = "https://product.hstatic.net/200000722513/product/thumb_b1_25831d5fc18e45b1ada9ed3f184c9815_grande.png" },
                // Laptop gaming
                new ProductImage { Id = 2, ProductId = "laptop-gaming-msi-gf63-12ucx-841vn", ImageUrl = "https://product.hstatic.net/200000722513/product/gf63-final_6ce8b15400404b2baf9632d843a2c4c7.png" },
                new ProductImage { Id = 3, ProductId = "laptop-gaming-msi-gf63-12uc-887vn", ImageUrl = "https://product.hstatic.net/200000722513/product/gf63-final_6ce8b15400404b2baf9632d843a2c4c7_large_c22125bccefc4149b1b7321cfc2ed062.png" },
                new ProductImage { Id = 4, ProductId = "laptop-gaming-lenovo-legion-slim-5-16irh8-82ya00buvn", ImageUrl = "https://product.hstatic.net/200000722513/product/82ya00buvn_0cb35336843549dc8781c599c63c6ae1.png" },
                new ProductImage { Id = 5, ProductId = "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn", ImageUrl = "https://product.hstatic.net/200000722513/product/ava-msi_c758a76200904fb0868673020ba576ef_grande.png" },
                new ProductImage { Id = 6, ProductId = "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn", ImageUrl = "https://product.hstatic.net/200000722513/product/289vn_8952ee549ddd4d3b8b40a040f14a8799_grande.png" },
                new ProductImage { Id = 7, ProductId = "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn", ImageUrl = "https://product.hstatic.net/200000722513/product/2_3013d5c7b77447a2b1995e7845adc708_grande.png" },
                new ProductImage { Id = 8, ProductId = "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn", ImageUrl = "https://product.hstatic.net/200000722513/product/1_17f74834dacc4eb99ad85d3637bfae65_grande.png" },
                new ProductImage { Id = 9, ProductId = "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn", ImageUrl = "https://product.hstatic.net/200000722513/product/5_e40e921e99d34efc87e74d21d48ed60b_grande.png" },
                new ProductImage { Id = 10, ProductId = "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn", ImageUrl = "https://product.hstatic.net/200000722513/product/3_0be25d3df3b740dcbfb7e94d2e6e44d1_grande.png" },
                new ProductImage { Id = 11, ProductId = "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn", ImageUrl = "https://product.hstatic.net/200000722513/product/4_38ee6e60844747f3a780f8cbfc795678_grande.png" },
                new ProductImage { Id = 12, ProductId = "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn", ImageUrl = "https://product.hstatic.net/200000722513/product/8_cb852dc5c90744eeac825a0ab6d5bf3b_grande.png" },
                new ProductImage { Id = 13, ProductId = "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn", ImageUrl = "https://product.hstatic.net/200000722513/product/6_3c627c81fb874603b78c2bf77874b88f_grande.png" },
                new ProductImage { Id = 14, ProductId = "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn", ImageUrl = "https://product.hstatic.net/200000722513/product/7_e3db80007449400f9f4271cb2d14e170_grande.png" },
                new ProductImage { Id = 15, ProductId = "laptop-gaming-lenovo-loq-15irh8-82xv00qqvn", ImageUrl = "https://product.hstatic.net/200000722513/product/82xv00qpvn_cb7cf3e1339a4fca857fc1b06d49d0f3_large_1240c22a67834dc4b2446439760ac870_medium.png" },
                new ProductImage { Id = 16, ProductId = "laptop-gaming-acer-predator-helios-300-ph315-55-76kg", ImageUrl = "https://product.hstatic.net/200000722513/product/76kg_1433e407838944df88bd906b57729c0a_medium.png" },
                new ProductImage { Id = 17, ProductId = "laptop-gaming-asus-tuf-a15-fa507nu-lp031w", ImageUrl = "https://product.hstatic.net/200000722513/product/lp520w_dfddfcf4a46d43e4b82391209328e195_large_7fa59a1a8ef14c37b78bc34161b45a87_medium.png" },
                // PC
                new ProductImage { Id = 18, ProductId = "pc-gvn-amd-r5-7600-vga-rtx-4060", ImageUrl = "https://product.hstatic.net/200000722513/product/cougar_2101a66491414b49a99fcd1e4e0421ad_medium.png" },
                new ProductImage { Id = 19, ProductId = "pc-gvn-x-asus-evangelion-2", ImageUrl = "https://file.hstatic.net/200000722513/file/asus_195eebbae0a44f84b7131bec913a6884.png" },
                new ProductImage { Id = 20, ProductId = "pc-gvn-intel-i7-13700f-vga-rtx-4060-ti", ImageUrl = "https://product.hstatic.net/200000722513/product/5000d_white_aero_d254c2c1d006470dad47a5a4b6c116e8_medium.png" },
                new ProductImage { Id = 21, ProductId = "pc-gvn-intel-i5-13600kf-vga-rtx-3060", ImageUrl = "https://product.hstatic.net/200000722513/product/ck560_sup_d1bb6e9c38ec4c1f9cdc51376bf69586_medium.png" },
                new ProductImage { Id = 22, ProductId = "pc-gvn-intel-i7-13700f-vga-rtx-4070", ImageUrl = "https://product.hstatic.net/200000722513/product/5000d_white_aero_61797e20d29a47ff9f7589071a5099da_medium.png" },
                new ProductImage { Id = 23, ProductId = "pc-gvn-intel-i5-12400f-vga-rtx-4060", ImageUrl = "https://product.hstatic.net/200000722513/product/6969_78b8ac902d2442afa83d968230de5974_medium.png" },
                new ProductImage { Id = 24, ProductId = "pc-gvn-intel-i3-12100f-vga-gtx-1650", ImageUrl = "https://product.hstatic.net/200000722513/product/3434_ffad2fc6179e4ab580d39c9b87ada591_medium.png" },
                // Chuột
                new ProductImage { Id = 25, ProductId = "chuot-logitech-g502-x-plus-lightspeed-white", ImageUrl = "https://product.hstatic.net/200000722513/product/g502x-plus-gallery-2-white_69229c9ba5534ad5bfae7d827037a28f_365394a31b6342e4949249099adb755e_medium.png" },
                new ProductImage { Id = 26, ProductId = "chuot-razer-basilisk-v3", ImageUrl = "https://product.hstatic.net/200000722513/product/thumbchuot_8b80210461d64beab28fb3cde34b7280_medium.jpg" },
                new ProductImage { Id = 27, ProductId = "chuot-logitech-g-pro-x-superlight-wireless-red", ImageUrl = "https://product.hstatic.net/200000722513/product/thumbchuot_a405fadb92a34c429c3eed4d11a84fb5_medium.jpg" },
                new ProductImage { Id = 28, ProductId = "chuot-logitech-g102-lightsync-black", ImageUrl = "https://product.hstatic.net/200000722513/product/logitech-g102-lightsync-rgb-black-1_bf4f5774229c4a0f81b8e8a2feebe4d8_aeb4ae49ee844c3e9d315883d4e482d4_medium.jpg" },
                new ProductImage { Id = 29, ProductId = "chuot-logitech-g304-wireless-white", ImageUrl = "https://product.hstatic.net/200000722513/product/h-g304-lightspeed-wireless-white-1000_e28318985b5049099c4e8381695e810f_782b9a4494994a2ea98cf9e699e35200_medium.jpg" },
                new ProductImage { Id = 30, ProductId = "chuot-logitech-g304-wireless", ImageUrl = "https://product.hstatic.net/200000722513/product/gvn_log_g304_3df28cd60a48412b8fb1d2ff762dc6a9_1f12340f2e6b4b8892163de0a06676f2_medium.png" }
            );

            // Seed orders
            modelBuilder.Entity<Order>().HasData(
                new Order { 
                    Id = 1, 
                    OrderStatus = OrderStatus.Completed, 
                    OrderDate = RandomGenerator.GenerateRandomDateTime(), 
                    TotalAmount = RandomGenerator.GenerateRandomAmount(),
                    ShippingAddress = RandomGenerator.GenerateRandomVietnameseAddress(),
                    UserId = RandomGenerator.GenerateUserId(),
                },
                new Order
                {
                    Id = 2,
                    OrderStatus = OrderStatus.Pending,
                    OrderDate = RandomGenerator.GenerateRandomDateTime(),
                    TotalAmount = RandomGenerator.GenerateRandomAmount(),
                    ShippingAddress = RandomGenerator.GenerateRandomVietnameseAddress(),
                    UserId = RandomGenerator.GenerateUserId(),
                },
                new Order
                {
                    Id = 3,
                    OrderStatus = OrderStatus.Completed,
                    OrderDate = RandomGenerator.GenerateRandomDateTime(),
                    TotalAmount = RandomGenerator.GenerateRandomAmount(),
                    ShippingAddress = RandomGenerator.GenerateRandomVietnameseAddress(),
                    UserId = RandomGenerator.GenerateUserId(),
                },
                new Order
                {
                    Id = 4,
                    OrderStatus = OrderStatus.Pending,
                    OrderDate = RandomGenerator.GenerateRandomDateTime(),
                    TotalAmount = RandomGenerator.GenerateRandomAmount(),
                    ShippingAddress = RandomGenerator.GenerateRandomVietnameseAddress(),
                    UserId = RandomGenerator.GenerateUserId(),
                },
                new Order
                {
                    Id = 5,
                    OrderStatus = OrderStatus.Completed,
                    OrderDate = RandomGenerator.GenerateRandomDateTime(),
                    TotalAmount = RandomGenerator.GenerateRandomAmount(),
                    ShippingAddress = RandomGenerator.GenerateRandomVietnameseAddress(),
                    UserId = RandomGenerator.GenerateUserId(),
                },
                new Order
                {
                    Id = 6,
                    OrderStatus = OrderStatus.Pending,
                    OrderDate = RandomGenerator.GenerateRandomDateTime(),
                    TotalAmount = RandomGenerator.GenerateRandomAmount(),
                    ShippingAddress = RandomGenerator.GenerateRandomVietnameseAddress(),
                    UserId = RandomGenerator.GenerateUserId(),
                },
                new Order
                {
                    Id = 7,
                    OrderStatus = OrderStatus.Completed,
                    OrderDate = RandomGenerator.GenerateRandomDateTime(),
                    TotalAmount = RandomGenerator.GenerateRandomAmount(),
                    ShippingAddress = RandomGenerator.GenerateRandomVietnameseAddress(),
                    UserId = RandomGenerator.GenerateUserId(),
                },
                new Order
                {
                    Id = 8,
                    OrderStatus = OrderStatus.Pending,
                    OrderDate = RandomGenerator.GenerateRandomDateTime(),
                    TotalAmount = RandomGenerator.GenerateRandomAmount(),
                    ShippingAddress = RandomGenerator.GenerateRandomVietnameseAddress(),
                    UserId = RandomGenerator.GenerateUserId(),
                },
                new Order
                {
                    Id = 9,
                    OrderStatus = OrderStatus.Failed,
                    OrderDate = RandomGenerator.GenerateRandomDateTime(),
                    TotalAmount = RandomGenerator.GenerateRandomAmount(),
                    ShippingAddress = RandomGenerator.GenerateRandomVietnameseAddress(),
                    UserId = RandomGenerator.GenerateUserId(),
                }
            );

            for (int i = 10; i <= 200; i++)
            {
                modelBuilder.Entity<Order>().HasData(
                    new Order
                    {
                        Id = i,
                        OrderStatus = RandomGenerator.GenerateRandomOrderStatus(),
                        OrderDate = RandomGenerator.GenerateRandomDateTime(),
                        TotalAmount = RandomGenerator.GenerateRandomAmount(),
                        ShippingAddress = RandomGenerator.GenerateRandomVietnameseAddress(),
                        UserId = RandomGenerator.GenerateUserId(),
                    });
            }

            for (int i = 1; i <= 200; i++) {
                Random rn = new Random();
                modelBuilder.Entity<OrderItem>().HasData(
                    new OrderItem
                    {
                        Id = i,
                        Qty = rn.Next(1, 5),
                        OrderId = i,
                        ProductId = productList[rn.Next(productList.Length)].Id
                    });
            }

            base.OnModelCreating(modelBuilder);
        }
    }
}
