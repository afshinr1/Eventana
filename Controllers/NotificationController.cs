using System;
using System.Linq;
using System.Threading.Tasks;
using Eventana.Data;
using Eventana.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Eventana.Controllers
{
    [ApiController]
    [Route("/api/notifications")]
    public class NotificationController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public NotificationController(ApplicationDbContext _context)
        {
            this.context = _context;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] string username)
        {
            var notifications = await context.Notifications.Where(x => x.Username.Equals(username)).OrderByDescending(x => x.CreatedAt).ToListAsync();
            //Gets all notifications for a user
            return Ok(notifications);
        }

        [HttpPost("add")]
        public async Task<IActionResult> Create([FromBody] Notification newNotification)
        {
            newNotification.CreatedAt = DateTime.Now;
            if (ModelState.IsValid)
            {
                var obj = await context.Notifications.AddAsync(newNotification);
                await context.SaveChangesAsync();
                return Ok(newNotification);
            }
            return Ok("Model state not valid");
        }

        [HttpDelete("delete")]
        public async Task<IActionResult> Delete([FromBody] Notification notif)
        {

            if (ModelState.IsValid)
            {
                var notification = await context.Notifications.FindAsync(notif.Id);

                if (notification != null)
                {
                    context.Notifications.Remove(notification);
                    await context.SaveChangesAsync();
                    return Ok(notification);
                }
                return NotFound();
            }
            return BadRequest();
        }
    }
}