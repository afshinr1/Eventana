using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Eventana.Models.DTO
{
    public class TestDTO
    {
        public int TestComment { get; set; }
        public string Category { get; set; }
        public int Guest { get; set; }
    }
}