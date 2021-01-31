using System.Linq;
using System.Threading.Tasks;
using Eventana.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Eventana.Controllers
{

    [ApiController]
    [Route("/api/comments")]
    public class CommentController : ControllerBase
    {
        private ApplicationDbContext Context;
        public CommentController(ApplicationDbContext _context)
        {
            Context = _context;
        }


        [HttpGet("{uuid}")]
        public async Task<IActionResult> GetComments(string uuid)
        {
            if (!string.IsNullOrEmpty(uuid))
            {
                var comments = await Context.Comments.Where(comment => comment.EventId.Equals(uuid)).ToListAsync();
                if (comments.Any())
                {
                    return Ok(comments);
                }
                else
                {
                    return Ok(new { Response = " There are no comments for this event" });
                }

            }
            return BadRequest();
        }
    }
}