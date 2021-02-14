using System;
using System.Linq;
using System.Threading.Tasks;
using Eventana.Data;
using Eventana.Models;
using Eventana.Models.DTO;
using Microsoft.AspNetCore.Authorization;
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


        [HttpGet("{id}")]
        public async Task<IActionResult> GetComments([FromRoute] int id)
        {

            var comments = await Context.Comments.Where(comment => comment.EventId == id).OrderByDescending(x => x.CreatedAt).ToListAsync();
            return Ok(comments);

        }

        [HttpPost("create")]
        public async Task<IActionResult> Create(CommentDTO newComment)
        {

            if (ModelState.IsValid)
            {
                Comment obj = new Comment() { Description = newComment.Description, CreatedAt = DateTime.Now, EventId = newComment.EventId, Username = newComment.Username, Type = newComment.Type };
                var newObj = await Context.AddAsync(obj);
                await Context.SaveChangesAsync();

                return Ok(obj);

            }
            return BadRequest();
        }
    }
}

