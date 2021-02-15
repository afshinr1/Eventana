using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Eventana.Models
{
    public class Guest
    {
        [Required]
        [Key]
        public int Id { get; set; }
        [Required]
        public int EventId { get; set; }
        [ForeignKey("EventId")]
        public EventModel Event { get; set; }
        [Required]
        public string Username { get; set; }
        public string UserImageUrl { get; set; }
        public string Type { get; set; }
    }
}