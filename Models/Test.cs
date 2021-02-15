using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Eventana.Models
{
    public class Test
    {
        [Key]
        public int Id { get; set; }
        public int TestCommentId { get; set; }
        [ForeignKey("TestCommentId")]
        public Comment TestComment { get; set; }
        public string Category { get; set; }
        public int GuestId { get; set; }
        [ForeignKey("GuestId")]
        public Guest Guest { get; set; }
    }
}