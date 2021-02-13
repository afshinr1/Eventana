using System.Threading.Tasks;
using Eventana.Data;
using Microsoft.AspNetCore.Mvc;

namespace Eventana.Controllers {
    [ApiController]
    [Route("/api/notifications")]
    public class NotificationController : ControllerBase {
        private readonly ApplicationDbContext context;

        public NotificationController(ApplicationDbContext _context)
        {
            this.context = _context;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] string username) {
            //Gets all notifications for a user
            return Ok();
        }

    }
}