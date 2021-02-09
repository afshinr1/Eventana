using Eventana.Data;
using Microsoft.AspNetCore.Mvc;

namespace Eventana.Controllers
{
    [ApiController]
    [Route("/api/guests")]
    public class GuestsController : ControllerBase
    {
        private ApplicationDbContext context;
        public GuestsController(ApplicationDbContext _context)
        {
            this.context = _context;
        }

        [HttpPost("add/{id}")]
        public Task<IActionResult> PostGuest([FromRoute] int id, [FromBody] string type)
        {  

            if(!String.IsNullOrEmpty(type)){
                var check = context.Guests.Where(guest => guest.EventId == id);

            return Ok();
            }

            return BadRequest();
        }
    }
}