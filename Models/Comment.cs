using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Eventana.Models
{

    public class Comment
    {
        [Key]
        public int Id { get; set; }

        public string Description { get; set; }

        public int EventId { get; set; }
        public string Username { get; set; }
        public string Type { get; set; }
        public DateTime? CreatedAt { get; set; }
    }
}