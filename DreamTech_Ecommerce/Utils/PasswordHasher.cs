using System.Security.Cryptography;

namespace DreamTech_Ecommerce.Utils
{
    using System;
    using System.Security.Cryptography;

    public static class PasswordHasher
    {
        private const int Iterations = 10000;
        private const int KeyLength = 32;

        public static string HashPassword(string password, byte[] salt)
        {
            using (var pbkdf2 = new Rfc2898DeriveBytes(password, salt, Iterations, HashAlgorithmName.SHA256))
            {
                byte[] key = pbkdf2.GetBytes(KeyLength);
                return Convert.ToBase64String(key);
            }
        }

        public static byte[] GenerateSalt()
        {
            byte[] salt = new byte[16];
            using (var rng = new RNGCryptoServiceProvider())
            {
                rng.GetBytes(salt);
            }
            return salt;
        }

        public static bool VerifyPassword(string enteredPassword, byte[] salt, string storedHashedPassword)
        {
            string hashedPasswordToVerify = HashPassword(enteredPassword, salt);

            return string.Equals(hashedPasswordToVerify, storedHashedPassword);
        }
    }

}
