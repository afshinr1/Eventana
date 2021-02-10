using System;
using System.Linq;
using System.Threading.Tasks;
using Eventana.Data;
using Microsoft.AspNetCore.Mvc;
using Eventana.Models.DTO;
using Eventana.Models;

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
        public async Task<IActionResult> PostGuest([FromRoute] int id, [FromBody] GuestDTO newGuest)
        {
            Guest obj = new Guest() { EventId = id, Type = newGuest.Type, Username = newGuest.Username, UserImageUrl = newGuest.UserImageUrl };
            if (ModelState.IsValid)
            {
                var check = context.Guests.Any(x => x.EventId == id && x.Username.Equals(newGuest.Username));
                if (check == false)
                {
                    object p = await context.Guests.AddAsync(obj);
                    await context.SaveChangesAsync();
                }
                //IF EXISTS, UPDATE
                else{
                    Guest target = context.Guests.Single(x => x.EventId == id && x.Username.Equals(newGuest.Username));
                    target.Type = newGuest.Type;
                    await context.SaveChangesAsync();
                }
                return Ok(obj);
            }
            return BadRequest();
        }
    }
}