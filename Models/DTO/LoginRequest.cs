using System.ComponentModel.DataAnnotations;

namespace Eventana.Models.DTO
{
    public class LoginRequest
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        public bool RememberMe { get; set; }
    }
}