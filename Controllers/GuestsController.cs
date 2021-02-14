using System;
using System.Linq;
using System.Threading.Tasks;
using Eventana.Data;
using Microsoft.AspNetCore.Mvc;
using Eventana.Models.DTO;
using Eventana.Models;
using Microsoft.AspNetCore.Authorization;

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
        public async Task<IActionResult> GetGuests([FromQuery] int id)
        {
            var guestList = context.Guests.Where(x => x.EventId == id).ToList();
            return Ok(guestList);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetGuest([FromRoute] int id, [FromQuery] string username)
        {
            var guest = context.Guests.FirstOrDefault(x => x.EventId == id && x.Username == username);
            if (guest != null)
            {
                return Ok(guest);
            }
            return NotFound();
        }

        [Authorize]
        [HttpPost("add/{id}")]
        public async Task<IActionResult> AddGuest([FromRoute] int? id, [FromBody] GuestDTO newGuest)
        {
            if(id == null){
                return NotFound();
            }
            Guest obj = new Guest() { EventId = (int)id, Type = newGuest.Type, Username = newGuest.Username, UserImageUrl = newGuest.UserImageUrl };
            if (ModelState.IsValid)
            {
                var check = context.Guests.Any(x => x.EventId == id && x.Username.Equals(newGuest.Username));
                if (check == false)
                {
                    object p = await context.Guests.AddAsync(obj);
                    await context.SaveChangesAsync();
                }
                //IF EXISTS, UPDATE
                else
                {
                    Guest target = context.Guests.SingleOrDefault(x => x.EventId == id && x.Username.Equals(newGuest.Username));
                    target.Type = newGuest.Type;
                    await context.SaveChangesAsync();
                }
                return Ok(obj);
            }
            return BadRequest();
        }

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> RemoveGuest([FromRoute] int id, [FromBody] string username)
        {
            var guest = context.Guests.FirstOrDefault(x => x.Username == username && x.EventId == id);

            if (guest != null)
            {
                context.Guests.Remove(guest);
                await context.SaveChangesAsync();
                return Ok(guest);
            }

            return NotFound();
        }
    }
}