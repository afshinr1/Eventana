using Eventana.Data;
using Microsoft.AspNetCore.Mvc;

namespace Eventana.Controllers
{

    [ApiController]
    [Route("/api/[Controller]")]
    public class UserController : ControllerBase
    {
        public ApplicationDbContext context { get; set; }
        public UserController(ApplicationDbContext _context)
        {
            context = _context;
        }


    }
}