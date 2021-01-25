
using System.Linq;
using System.Threading.Tasks;
using Eventana.Data;
using Eventana.Models.Actions;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Newtonsoft.Json;

namespace Eventana.Controllers
{
    [Route("/api/authentication")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        public UserManager<IdentityUser> UserManager { get; }
        public SignInManager<IdentityUser> SignInManager { get; }
        public ApplicationDbContext Context { get; }

        public AuthenticationController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager, ApplicationDbContext _context)
        {
            UserManager = userManager;
            SignInManager = signInManager;
            Context = _context;
        }


        [HttpPost("login")]
        public async Task<IActionResult> Post([FromBody] LoginRequest credentials)
        {

            string username = credentials.Username;
            string password = credentials.Password;
            var result = await SignInManager.PasswordSignInAsync(username, password, isPersistent: false, lockoutOnFailure: false);
            if (result.Succeeded)
            {
                var user = await UserManager.FindByNameAsync(username);
                var token = await UserManager.CreateSecurityTokenAsync(user);
                return Ok(new { user = user, token = token});
            }
            else
            {
                throw new System.Exception("Bad request");

            }
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            if (ModelState.IsValid)
            {
                var user = new IdentityUser { UserName = request.Username, Email = request.Email };
                var result = await UserManager.CreateAsync(user, request.Password);

                if (result.Succeeded)
                {
                    return Ok(user);
                }
                else
                {
                    ModelState.AddModelError("error", "Email or username already in use");
                    return BadRequest(ModelState);
                }

            }
            else
            {
                return BadRequest();
            }
        }
    }
}