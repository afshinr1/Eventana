using System.ComponentModel.DataAnnotations;

namespace Eventana.Models {
    public class Notification {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public string NotificationDescription { get; set; }
    }
}