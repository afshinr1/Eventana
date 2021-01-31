using System;
using System.ComponentModel.DataAnnotations;

namespace Eventana.Models
{

    public class EventModel
    {
        [Key]
        public string UUID { get; set; }
        [MaxLength(30)]
        public string Name { get; set; }
        [MaxLength(200)]
        public string Description { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime StartTime { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime EndTime { get; set; }
        public double Fee { get; set; }
        public int Capacity { get; set; }
        public string Categories { get; set; }
        public string ImageUrl { get; set; }
        public string HostedBy { get; set; }
    }
}