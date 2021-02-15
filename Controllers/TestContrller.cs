using System.Linq;
using Eventana.Data;
using Eventana.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Eventana.Controllers
{
    [ApiController]
    [Route("/api/test")]
    public class TestController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        public TestController(ApplicationDbContext _context)
        {
            context = _context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var testList = context.Tests.Include(x => x.Guest).ToList();
            return Ok(testList);
        }

        [HttpPost("add")]
        public IActionResult Add(Test theTest)
        {
            if(ModelState.IsValid){

            context.Tests.Add(theTest);
            context.SaveChanges();
            return Ok(theTest);
            }
            else return BadRequest();
        }
    }
}