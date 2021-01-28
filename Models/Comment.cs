using System;
using System.ComponentModel.DataAnnotations;

namespace Eventana.Models
{

    public class Comment
    {
        [Key]
        public string UUID { get; set; }
        public string Description { get; set; }
        public string EventId { get; set; }
        public string Username { get; set; }
        // public DateTime CreatedAt { get; set; }
    }
}