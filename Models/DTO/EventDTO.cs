using System.ComponentModel.DataAnnotations;

namespace Eventana.Models.DTO
{
    public class EventDTO
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        public string Location { get; set; }
        public string Type { get; set; }

    }
}