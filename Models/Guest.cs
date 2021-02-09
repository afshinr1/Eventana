using System.ComponentModel.DataAnnotations;

namespace Eventana.Models
{
    public class Guest
    {
        [Required]
        [Key]
        public int Id { get; set; }
        [Required]
        public int EventId { get; set; }
        [Required]
        public string Username { get; set; }
        public string UserImageUrl { get; set; }
    }
}