using DreamTech_Ecommerce.Models;
using System;
using System.Globalization;
using System.Text;

namespace DreamTech_Ecommerce.Utils
{
    public class RandomGenerator
    {
        private static readonly Random random = new Random();
        // Generate a VND random value from min and max range
        public static int GenerateRandomAmount(int minAmount = 2000000, int maxAmount = 500000000)
        {
            int generatedAmount = random.Next(minAmount, maxAmount + 1);

            return generatedAmount;
        }

        // Generate a random datetime from min and max range
        public static DateTime GenerateRandomDateTime(int fromYear = 2019, int toYear = 2023)
        {
            DateTime minDateTime = new DateTime(2019, 12, 23);
            DateTime maxDateTime = new DateTime(2023, 12, 23, 23, 59, 59);

            long range = maxDateTime.Ticks - minDateTime.Ticks;
            long randomTicks = (long)(new Random().NextDouble() * range);

            DateTime generatedDateTime = minDateTime.AddTicks(randomTicks);

            return generatedDateTime;
        }

        // Generate a random Vietnamese address
        public static string GenerateRandomVietnameseAddress()
        {
            string[] streetPrefixes = { "Đường", "Phố", "Ngõ", "Hẻm" };
            string[] cityPrefixes = { "Thành phố", "Quận", "Huyện", "Thị xã" };
            string[] cities = { "Hồ Chí Minh", "Hà Nội", "Đà Nẵng", "Hải Phòng", "Cần Thơ", "Huế", "Nha Trang", "Đà Lạt" };

            string streetPrefix = streetPrefixes[random.Next(streetPrefixes.Length)];
            string cityPrefix = cityPrefixes[random.Next(cityPrefixes.Length)];
            string city = cities[random.Next(cities.Length)];

            string streetName = "Số " + random.Next(1, 1000);
            string district = "Quận " + random.Next(1, 15);
            string ward = "Phường " + random.Next(1, 30);

            string address = $"{streetPrefix} {streetName}, {ward}, {district}, {cityPrefix} {city}";

            return address;
        }

        // Generate a random userId
        public static int GenerateUserId(int minValue = 2, int maxValue = 99)
        {
            if (minValue > maxValue)
            {
                throw new ArgumentException("minValue must be less than or equal to maxValue");
            }

            int generatedNumber = random.Next(minValue, maxValue + 1);

            return generatedNumber;
        }
        public static OrderStatus GenerateRandomOrderStatus()
        {
            double randomPercentage = random.NextDouble() * 100;

            if (randomPercentage < 10)
            {
                return OrderStatus.Failed;
            }
            else if (randomPercentage < 70)
            {
                return OrderStatus.Completed;
            }
            else
            {
                return OrderStatus.Pending;
            }
        }

        public static string GenerateRandomFirstName()
        {
            string[] firstNames = { "John", "Jane", "Michael", "Emily", "Christopher", "Emma", "Bảo Anh", "Thị Thảo", "Quang Đỉnh", "Việt", "Bảo Ngọc", "Bảo Ngân", "Anh Dũng", "Bảo An", "Cẩm Ly", "Đình Quang", "Gia Bảo", "Hà My", "Hải Đăng", "Hương Ly", "Khánh Hòa", "Hoàng Hải", "Linh Chi", "Minh Hải", "Ngọc Anh", "Phương Anh", "Quang Huy", "Quỳnh Anh", "Sơn Tùng", "Thanh Hà", "Trúc Ly", "Vân Anh" };
            return firstNames[random.Next(firstNames.Length)];
        }

        public static string GenerateRandomLastName()
        {
            string[] lastNames = { "Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Lê", "Võ", "Khổng", "Nguyễn", "Huỳnh", "Trần", "Trịnh", "Lý", "Đặng", "Ngô", "Bùi", "Phan", "Đỗ", "Phạm" };
            return lastNames[random.Next(lastNames.Length)];
        }

        public static string GenerateRandomEmail(string firstName, string lastName)
        {
            string[] domains = { "gmail.com", "yahoo.com", "outlook.com", "example.com" };
            string domain = domains[random.Next(domains.Length)];

            string normalizedFirstName = RemoveDiacritics(firstName).ToLower().Replace(" ", "");
            string normalizedLastName = RemoveDiacritics(lastName).ToLower().Replace(" ", "");

            return $"{normalizedFirstName}.{normalizedLastName}@{domain}";
        }

        public static string RemoveDiacritics(string text)
        {
            var normalizedString = text.Normalize(NormalizationForm.FormD);
            var stringBuilder = new StringBuilder();

            foreach (var c in normalizedString)
            {
                var unicodeCategory = CharUnicodeInfo.GetUnicodeCategory(c);
                if (unicodeCategory != UnicodeCategory.NonSpacingMark)
                {
                    stringBuilder.Append(c);
                }
            }

            return stringBuilder.ToString().Normalize(NormalizationForm.FormC);
        }
        public static string GenerateRandomPhoneNumber()
        {
            string[] prefixes = { "091", "098", "097", "096", "094", "093", "092", "090" };

            string phoneNumber = $"{prefixes[random.Next(prefixes.Length)]}-{random.Next(100, 999)}-{random.Next(1000, 9999)}";

            return phoneNumber;
        }
    }
}
