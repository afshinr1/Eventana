using System.ComponentModel.DataAnnotations;

namespace Eventana.Models {
    public class User{
        [Key]
        public string Username { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string Email { get; set; }
    }
}