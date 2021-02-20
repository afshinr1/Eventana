using System.Linq;
using System.Threading.Tasks;
using Eventana.Data;
using Eventana.Models;
using Microsoft.AspNetCore.Mvc;

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
            var notifications = context.Notifications.Where(x => x.Username.Equals(username, System.StringComparison.Ordinal)).ToList();
            //Gets all notifications for a user
            return Ok(notifications);
        }

        [HttpPost("add")]
        public async Task<IActionResult> Create([FromBody] Notification newNotification)
        {
            if (ModelState.IsValid)
            {
                var obj = context.Notifications.AddAsync(newNotification);
                await context.SaveChangesAsync();
                return Ok(obj);
            }
            return BadRequest("Model state not valid");
        }

    }
}