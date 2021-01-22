
using System.ComponentModel.DataAnnotations;

namespace Eventana.Models.Actions
{
    public class RegisterRequest
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [DataType(DataType.Password)]
        [Required]
        public string Password { get; set; }

    }
}