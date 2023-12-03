using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DreamTech_Ecommerce.Migrations
{
    public partial class InitiateDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Discounts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DiscountRate = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Discounts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PaymentMethods",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentMethods", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Role = table.Column<int>(type: "int", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HashedPassword = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Salt = table.Column<byte[]>(type: "varbinary(16)", maxLength: 16, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Brand = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Price = table.Column<int>(type: "int", nullable: false),
                    SalePrice = table.Column<int>(type: "int", nullable: true),
                    Cpu = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Ram = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Disk = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Vga = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Screen = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Color = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Size = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Weight = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Battery = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    QtyInStock = table.Column<int>(type: "int", nullable: false),
                    CategoryId = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Products_Categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Qty = table.Column<int>(type: "int", nullable: false),
                    OrderStatus = table.Column<int>(type: "int", nullable: false),
                    OrderDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    TotalAmount = table.Column<int>(type: "int", nullable: false),
                    ShippingAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    DiscountId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Orders_Discounts_DiscountId",
                        column: x => x.DiscountId,
                        principalTable: "Discounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Orders_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "CartItems",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Qty = table.Column<int>(type: "int", nullable: false),
                    ProductId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CartItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CartItems_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CartItems_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Gifts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<int>(type: "int", nullable: false),
                    GiftName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Value = table.Column<int>(type: "int", nullable: true),
                    ProductId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Gifts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Gifts_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProductImages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ImageUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProductId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductImages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProductImages_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OrderItems",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Qty = table.Column<int>(type: "int", nullable: false),
                    ShippingAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProductId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    OrderId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrderItems_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OrderItems_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Payments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PaymentDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Amount = table.Column<int>(type: "int", nullable: false),
                    OrderId = table.Column<int>(type: "int", nullable: false),
                    PaymentMethodId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Payments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Payments_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Payments_PaymentMethods_PaymentMethodId",
                        column: x => x.PaymentMethodId,
                        principalTable: "PaymentMethods",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { "apple", "Apple" },
                    { "ban-phim", "Bàn phím" },
                    { "chuot-lot-chuot", "Chuột - Lót chuột" },
                    { "laptop", "Laptop" },
                    { "laptop-gaming", "Laptop Gaming" },
                    { "main-cpu-vga", "Main - CPU - VGA" },
                    { "man-hinh", "Màn hình" },
                    { "pc", "PC" },
                    { "phan-mem-mang", "Phần mềm + Mạng" },
                    { "phu-kien", "Phụ kiện" },
                    { "tai-nghe-loa", "Tai nghe - Loa" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "FirstName", "HashedPassword", "LastName", "Phone", "Role", "Salt" },
                values: new object[] { 1, "admin@test.com", "Admin", "Rmg+bYlkeE/boUDayWPomveh0YdAXQFdKggn51R8atA=", "User", "123-456-7890", 0, new byte[] { 201, 5, 137, 189, 53, 28, 185, 168, 19, 128, 245, 123, 235, 21, 166, 230 } });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Battery", "Brand", "CategoryId", "Color", "Cpu", "Description", "Disk", "Name", "Price", "QtyInStock", "Ram", "SalePrice", "Screen", "Size", "Vga", "Weight" },
                values: new object[,]
                {
                    { "chuot-logitech-g-pro-x-superlight-wireless-red", "Pin sạc", "Logitech", "chuot-lot-chuot", "Silver", "i3 12100F", "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.", "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)", "Chuột Logitech G Pro X Superlight Wireless Red", 3590000, 20, "8GB", 2850000, "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC", "359 x 254 x 21.5 mm", "GTX 1650", "1.86 kg" },
                    { "chuot-logitech-g102-lightsync-black", "Không", "Logitech", "chuot-lot-chuot", "Silver", "i3 12100F", "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.", "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)", "Chuột Logitech G102 LightSync Black", 599000, 20, "8GB", 399000, "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC", "359 x 254 x 21.5 mm", "GTX 1650", "1.86 kg" },
                    { "chuot-logitech-g304-wireless", "Pin rời", "Logitech", "chuot-lot-chuot", "Silver", "i3 12100F", "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.", "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)", "Chuột Logitech G304 Wireless", 1090000, 20, "8GB", 780000, "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC", "359 x 254 x 21.5 mm", "GTX 1650", "1.86 kg" },
                    { "chuot-logitech-g304-wireless-white", "Pin sạc", "Logitech", "chuot-lot-chuot", "Silver", "i3 12100F", "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.", "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)", "Chuột Logitech G304 Wireless White", 1090000, 20, "8GB", 780000, "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC", "359 x 254 x 21.5 mm", "GTX 1650", "1.86 kg" },
                    { "chuot-logitech-g502-x-plus-lightspeed-white", "Pin sạc", "Logitech", "chuot-lot-chuot", "Silver", "i3 12100F", "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.", "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)", "Chuột Logitech G502 X Plus LightSpeed White", 3890000, 20, "8GB", 3190000, "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC", "359 x 254 x 21.5 mm", "GTX 1650", "1.86 kg" },
                    { "chuot-razer-basilisk-v3", "Không", "Logitech", "chuot-lot-chuot", "Silver", "i3 12100F", "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.", "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)", "Chuột Razer Basilisk V3", 1990000, 20, "8GB", 990000, "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC", "359 x 254 x 21.5 mm", "GTX 1650", "1.86 kg" },
                    { "laptop-asus-expertbook-b1400ceae-bv3186w", "42WHrs, 3S1P, 3-cell Li-ion", "Asus", "laptop", "Black", "Intel Core i3-1115G4 3.0 GHz (6M Cache, up to 4.1 GHz, 2 cores)", "là một chiếc laptop văn phòng chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.", "256GB PCIE G3 SSD (Còn trống 1 khe 2.5\" HDD up to 1TB)", "Laptop Asus ExpertBook B1400CEAE BV3186W", 14990000, 10, "12GB DDR4 3200MHz (4GB onboard + 8GB Gearvn tặng)\r\nNâng cấp tối đa 36GB", 8990000, "14.0 HD (1366X768) 16:9 220nits, Anti-Glare NTSC:45% ", "32.34 x 21.56 x 1.92 ~ 1.92 cm", "Intel® UHD Graphics", "1.45 kg" },
                    { "laptop-gaming-acer-predator-helios-300-ph315-55-76kg", "3 Cell 52.4 WHr", "Acer Predato", "laptop-gaming", "Silver", "Intel Core i5-12450H 3.3GHz up to 4.40GHz 12MB, 8 nhân, 12 luồng", "là một chiếc laptop gaming chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.", "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)", "Laptop gaming Acer Predator Helios 300 PH315 55 76KG", 48490000, 10, "8GB (8x1) DDR4 3200MHz (2x SO-DIMM socket, up to 64GB SDRAM)", 30990000, "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC", "359 x 254 x 21.5 mm", "Nvidia Geforce RTX 2050 4GB GDDR6", "1.86 kg" },
                    { "laptop-gaming-asus-tuf-a15-fa507nu-lp031w", "3 Cell 52.4 WHr", "ASUS", "laptop-gaming", "Silver", "R7-7735HS", "là một chiếc laptop gaming chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.", "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)", "Laptop gaming ASUS TUF A15 FA507NU LP031W", 30490000, 10, "16 GB", 25990000, "15.6 inch FHD", "359 x 254 x 21.5 mm", "Nvidia Geforce RTX 2050 4GB GDDR6", "1.86 kg" },
                    { "laptop-gaming-lenovo-legion-slim-5-16irh8-82ya00buvn", "3 Cell 52.4 WHr", "Lenovo", "laptop-gaming", "Silver", "Intel Core i5-12450H 3.3GHz up to 4.40GHz 12MB, 8 nhân, 12 luồng", "là một chiếc laptop gaming chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.", "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)", "Laptop gaming Lenovo Legion Slim 5 16IRH8 82YA00BUVN", 43990000, 10, "8GB (8x1) DDR4 3200MHz (2x SO-DIMM socket, up to 64GB SDRAM)", 41990000, "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC", "359 x 254 x 21.5 mm", "Nvidia Geforce RTX 2050 4GB GDDR6", "1.86 kg" },
                    { "laptop-gaming-lenovo-loq-15irh8-82xv00qqvn", "3 Cell 52.4 WHr", "Lenovo", "laptop-gaming", "Silver", "Intel Core i5-12450H 3.3GHz up to 4.40GHz 12MB, 8 nhân, 12 luồng", "là một chiếc laptop gaming chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.", "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)", "Laptop gaming Lenovo LOQ 15IRH8 82XV00QQVN", 20990000, 10, "8GB (8x1) DDR4 3200MHz (2x SO-DIMM socket, up to 64GB SDRAM)", 18990000, "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC", "359 x 254 x 21.5 mm", "Nvidia Geforce RTX 2050 4GB GDDR6", "1.86 kg" },
                    { "laptop-gaming-msi-gf63-12uc-887vn", "3 Cell 52.4 WHr", "MSI", "laptop-gaming", "Silver", "Intel Core i5-12450H 3.3GHz up to 4.40GHz 12MB, 8 nhân, 12 luồng", "là một chiếc laptop gaming chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.", "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)", "Laptop gaming MSI GF63 12UC 887VN", 20990000, 10, "8GB (8x1) DDR4 3200MHz (2x SO-DIMM socket, up to 64GB SDRAM)", 19790000, "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC", "359 x 254 x 21.5 mm", "Nvidia Geforce RTX 2050 4GB GDDR6", "1.86 kg" },
                    { "laptop-gaming-msi-gf63-12ucx-841vn", "3 Cell 52.4 WHr", "MSI", "laptop-gaming", "Silver", "Intel Core i5-12450H 3.3GHz up to 4.40GHz 12MB, 8 nhân, 12 luồng", "là một chiếc laptop gaming chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.", "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)", "Laptop gaming MSI GF63 12UCX 841VN", 17990000, 10, "8GB (8x1) DDR4 3200MHz (2x SO-DIMM socket, up to 64GB SDRAM)", 15990000, "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC", "359 x 254 x 21.5 mm", "Nvidia Geforce RTX 2050 4GB GDDR6", "1.86 kg" },
                    { "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn", "4 Cell 99.9WHrs", "MSI", "laptop-gaming", "Selenite Gray", "Intel Core i9-13900H 4.1GHz up to 5.4GHz, 14 Cores 20 Threads ,24MB Cache", "là một chiếc laptop gaming chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.", "2TB SSD PCIE G4X4 (2 slots M.2 NVMe PCIe Gen4)", "Laptop Gaming MSI Stealth 16 Mercedes AMG A13VG 289VN", 80990000, 10, "32GB (16x2) DDR5 5200MHz (2x SO-DIMM socket, up to 64GB SDRAM)", 74990000, "16\" UHD+ (3840x2400), 16:10, 100% DCI-P3, OLED, DisplayHDR True Black 600", "355.8 x 259.7 x 19.95 (mm)", "NVIDIA® GeForce RTX™ 4070 8GB GDDR6 + MUX Switch", "1.88 kg" },
                    { "pc-gvn-amd-r5-7600-vga-rtx-4060", "3 Cell 52.4 WHr", "GVN", "pc", "Silver", "R5 7600", "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.", "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)", "PC GVN AMD R5-7600/ VGA RTX 4060", 26480000, 10, "16GB", 25990000, "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC", "359 x 254 x 21.5 mm", "Nvidia Geforce RTX 2050 4GB GDDR6", "1.86 kg" },
                    { "pc-gvn-intel-i3-12100f-vga-gtx-1650", "3 Cell 52.4 WHr", "GVN", "pc", "Silver", "i3 12100F", "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.", "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)", "PC GVN Intel i3-12100F/ VGA GTX 1650", 11590000, 10, "8GB", 10890000, "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC", "359 x 254 x 21.5 mm", "GTX 1650", "1.86 kg" },
                    { "pc-gvn-intel-i5-12400f-vga-rtx-4060", "3 Cell 52.4 WHr", "GVN", "pc", "Silver", "i5 12400F", "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.", "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)", "PC GVN Intel i5-12400F/ VGA RTX 4060", 24990000, 10, "8GB", 24490000, "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC", "359 x 254 x 21.5 mm", "RTX 4070", "1.86 kg" },
                    { "pc-gvn-intel-i5-13600kf-vga-rtx-3060", "3 Cell 52.4 WHr", "GVN", "pc", "Silver", "i5 13600KF", "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.", "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)", "PC GVN Intel i5-13600KF/ VGA RTX 3060", 29510000, 10, "16GB", 28990000, "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC", "359 x 254 x 21.5 mm", "RTX 3060", "1.86 kg" },
                    { "pc-gvn-intel-i7-13700f-vga-rtx-4060-ti", "3 Cell 52.4 WHr", "GVN", "pc", "Silver", "i7 13700F", "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.", "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)", "PC GVN Intel i7-13700F/ VGA RTX 4060 Ti", 33920000, 10, "16GB", 33890000, "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC", "359 x 254 x 21.5 mm", "Nvidia Geforce RTX 2050 4GB GDDR6", "1.86 kg" },
                    { "pc-gvn-intel-i7-13700f-vga-rtx-4070", "3 Cell 52.4 WHr", "GVN", "pc", "Silver", "i7 13700F", "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.", "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)", "PC GVN Intel i7-13700F/ VGA RTX 4070", 59990000, 10, "16GB", 58990000, "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC", "359 x 254 x 21.5 mm", "RTX 4070", "1.86 kg" },
                    { "pc-gvn-x-asus-evangelion-2", "3 Cell 52.4 WHr", "GVN", "pc", "Silver", "R5 7600", "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.", "512GB NVMe PCIe Gen 4x4 SSD ( Còn trống 1 khe 2.5\" SATA)", "PC GVN x ASUS EVANGELION 2", 130000000, 10, "16GB", 125000000, "15.6\" FHD (1920 x 1080) IPS 144Hz, Thin Bezel, 45%NTSC", "359 x 254 x 21.5 mm", "Nvidia Geforce RTX 2050 4GB GDDR6", "1.86 kg" }
                });

            migrationBuilder.InsertData(
                table: "Gifts",
                columns: new[] { "Id", "GiftName", "ProductId", "Type", "Value" },
                values: new object[,]
                {
                    { 1, "Màn hình MSI OPTIX MAG274QRX 27\" IPS 2K 240Hz G-Sync chuyên game", "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn", 1, 9390000 },
                    { 2, "Móc khóa Keycap GearVN", "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn", 1, 99000 },
                    { 3, "Áo khoác (bomber)", "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn", 1, 300000 },
                    { 4, "Áo khoác (bomber)", "laptop-asus-expertbook-b1400ceae-bv3186w", 1, 300000 }
                });

            migrationBuilder.InsertData(
                table: "ProductImages",
                columns: new[] { "Id", "ImageUrl", "ProductId" },
                values: new object[,]
                {
                    { 1, "https://product.hstatic.net/200000722513/product/thumb_b1_25831d5fc18e45b1ada9ed3f184c9815_grande.png", "laptop-asus-expertbook-b1400ceae-bv3186w" },
                    { 2, "https://product.hstatic.net/200000722513/product/gf63-final_6ce8b15400404b2baf9632d843a2c4c7.png", "laptop-gaming-msi-gf63-12ucx-841vn" },
                    { 3, "https://product.hstatic.net/200000722513/product/gf63-final_6ce8b15400404b2baf9632d843a2c4c7_large_c22125bccefc4149b1b7321cfc2ed062.png", "laptop-gaming-msi-gf63-12uc-887vn" },
                    { 4, "https://product.hstatic.net/200000722513/product/82ya00buvn_0cb35336843549dc8781c599c63c6ae1.png", "laptop-gaming-lenovo-legion-slim-5-16irh8-82ya00buvn" },
                    { 5, "https://product.hstatic.net/200000722513/product/ava-msi_c758a76200904fb0868673020ba576ef_grande.png", "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn" },
                    { 6, "https://product.hstatic.net/200000722513/product/289vn_8952ee549ddd4d3b8b40a040f14a8799_grande.png", "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn" },
                    { 7, "https://product.hstatic.net/200000722513/product/2_3013d5c7b77447a2b1995e7845adc708_grande.png", "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn" },
                    { 8, "https://product.hstatic.net/200000722513/product/1_17f74834dacc4eb99ad85d3637bfae65_grande.png", "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn" },
                    { 9, "https://product.hstatic.net/200000722513/product/5_e40e921e99d34efc87e74d21d48ed60b_grande.png", "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn" },
                    { 10, "https://product.hstatic.net/200000722513/product/3_0be25d3df3b740dcbfb7e94d2e6e44d1_grande.png", "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn" },
                    { 11, "https://product.hstatic.net/200000722513/product/4_38ee6e60844747f3a780f8cbfc795678_grande.png", "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn" },
                    { 12, "https://product.hstatic.net/200000722513/product/8_cb852dc5c90744eeac825a0ab6d5bf3b_grande.png", "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn" },
                    { 13, "https://product.hstatic.net/200000722513/product/6_3c627c81fb874603b78c2bf77874b88f_grande.png", "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn" },
                    { 14, "https://product.hstatic.net/200000722513/product/7_e3db80007449400f9f4271cb2d14e170_grande.png", "laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn" },
                    { 15, "https://product.hstatic.net/200000722513/product/82xv00qpvn_cb7cf3e1339a4fca857fc1b06d49d0f3_large_1240c22a67834dc4b2446439760ac870_medium.png", "laptop-gaming-lenovo-loq-15irh8-82xv00qqvn" },
                    { 16, "https://product.hstatic.net/200000722513/product/76kg_1433e407838944df88bd906b57729c0a_medium.png", "laptop-gaming-acer-predator-helios-300-ph315-55-76kg" },
                    { 17, "https://product.hstatic.net/200000722513/product/lp520w_dfddfcf4a46d43e4b82391209328e195_large_7fa59a1a8ef14c37b78bc34161b45a87_medium.png", "laptop-gaming-asus-tuf-a15-fa507nu-lp031w" },
                    { 18, "https://product.hstatic.net/200000722513/product/cougar_2101a66491414b49a99fcd1e4e0421ad_medium.png", "pc-gvn-amd-r5-7600-vga-rtx-4060" },
                    { 19, "https://file.hstatic.net/200000722513/file/asus_195eebbae0a44f84b7131bec913a6884.png", "pc-gvn-x-asus-evangelion-2" },
                    { 20, "https://product.hstatic.net/200000722513/product/5000d_white_aero_d254c2c1d006470dad47a5a4b6c116e8_medium.png", "pc-gvn-intel-i7-13700f-vga-rtx-4060-ti" },
                    { 21, "https://product.hstatic.net/200000722513/product/ck560_sup_d1bb6e9c38ec4c1f9cdc51376bf69586_medium.png", "pc-gvn-intel-i5-13600kf-vga-rtx-3060" },
                    { 22, "https://product.hstatic.net/200000722513/product/5000d_white_aero_61797e20d29a47ff9f7589071a5099da_medium.png", "pc-gvn-intel-i7-13700f-vga-rtx-4070" },
                    { 23, "https://product.hstatic.net/200000722513/product/6969_78b8ac902d2442afa83d968230de5974_medium.png", "pc-gvn-intel-i5-12400f-vga-rtx-4060" },
                    { 24, "https://product.hstatic.net/200000722513/product/3434_ffad2fc6179e4ab580d39c9b87ada591_medium.png", "pc-gvn-intel-i3-12100f-vga-gtx-1650" },
                    { 25, "https://product.hstatic.net/200000722513/product/g502x-plus-gallery-2-white_69229c9ba5534ad5bfae7d827037a28f_365394a31b6342e4949249099adb755e_medium.png", "chuot-logitech-g502-x-plus-lightspeed-white" },
                    { 26, "https://product.hstatic.net/200000722513/product/thumbchuot_8b80210461d64beab28fb3cde34b7280_medium.jpg", "chuot-razer-basilisk-v3" },
                    { 27, "https://product.hstatic.net/200000722513/product/thumbchuot_a405fadb92a34c429c3eed4d11a84fb5_medium.jpg", "chuot-logitech-g-pro-x-superlight-wireless-red" },
                    { 28, "https://product.hstatic.net/200000722513/product/logitech-g102-lightsync-rgb-black-1_bf4f5774229c4a0f81b8e8a2feebe4d8_aeb4ae49ee844c3e9d315883d4e482d4_medium.jpg", "chuot-logitech-g102-lightsync-black" },
                    { 29, "https://product.hstatic.net/200000722513/product/h-g304-lightspeed-wireless-white-1000_e28318985b5049099c4e8381695e810f_782b9a4494994a2ea98cf9e699e35200_medium.jpg", "chuot-logitech-g304-wireless-white" },
                    { 30, "https://product.hstatic.net/200000722513/product/gvn_log_g304_3df28cd60a48412b8fb1d2ff762dc6a9_1f12340f2e6b4b8892163de0a06676f2_medium.png", "chuot-logitech-g304-wireless" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_CartItems_ProductId",
                table: "CartItems",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_CartItems_UserId",
                table: "CartItems",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Gifts_ProductId",
                table: "Gifts",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderItems_OrderId",
                table: "OrderItems",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderItems_ProductId",
                table: "OrderItems",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_DiscountId",
                table: "Orders",
                column: "DiscountId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_UserId",
                table: "Orders",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Payments_OrderId",
                table: "Payments",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_Payments_PaymentMethodId",
                table: "Payments",
                column: "PaymentMethodId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductImages_ProductId",
                table: "ProductImages",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_Products_CategoryId",
                table: "Products",
                column: "CategoryId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CartItems");

            migrationBuilder.DropTable(
                name: "Gifts");

            migrationBuilder.DropTable(
                name: "OrderItems");

            migrationBuilder.DropTable(
                name: "Payments");

            migrationBuilder.DropTable(
                name: "ProductImages");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "PaymentMethods");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Discounts");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Categories");
        }
    }
}
