using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Eventana.Data;
using Eventana.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Eventana.Controllers
{
    [Route("/api/events")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private ApplicationDbContext context;
        public EventController(ApplicationDbContext _context)
        {
            context = _context;
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var check = await context.Events.AnyAsync();

            if (check == false)
            {
                return NotFound();
            }
            var events = await context.Events.ToListAsync();
            return Ok(events);
        }

        [Authorize]
        [HttpPost("createEvent")]
        public async Task<IActionResult> Create([FromBody] EventModel newEvent)
        {
            if (ModelState.IsValid)
            {
                await context.AddAsync(newEvent);
                return Ok(newEvent);
            }
            return BadRequest("Information not sufficient");
        }


    }
}