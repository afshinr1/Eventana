
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Eventana.Data;
using Eventana.Models.DTO;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;

namespace Eventana.Controllers
{
    [Route("/api/authentication")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private UserManager<IdentityUser> UserManager;
        private SignInManager<IdentityUser> SignInManager;
        private ApplicationDbContext Context;
        private RoleManager<IdentityRole> RoleManager;
        private IConfiguration Configuration;

        public AuthenticationController(UserManager<IdentityUser> userManager, IConfiguration _configuration, SignInManager<IdentityUser> signInManager, RoleManager<IdentityRole> roleManager, ApplicationDbContext _context)
        {
            UserManager = userManager;
            SignInManager = signInManager;
            Context = _context;
            RoleManager = roleManager;
            Configuration = _configuration;
        }


        [HttpPost("login")]
        public async Task<IActionResult> Post([FromBody] LoginRequest credentials)
        {
            if (ModelState.IsValid)
            {

                string username = credentials.Username;
                string password = credentials.Password;
                var result = await SignInManager.PasswordSignInAsync(username, password, isPersistent: false, lockoutOnFailure: false);
                if (result.Succeeded)
                {
                    var user = await UserManager.FindByNameAsync(username);
                    var userRoles = await UserManager.GetRolesAsync(user);
                    var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                };
                    foreach (var userRole in userRoles)
                    {
                        authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                    }
                    var key = Encoding.ASCII.GetBytes
                     (Configuration["JWT:SecretKey"]);
                    //Generate Token for user
                    var JWToken = new JwtSecurityToken(
                        issuer: Configuration["JWT:ValidIssuer"],
                        audience: Configuration["JWT:ValidAudience"],
                        claims: authClaims,
                        notBefore: new DateTimeOffset(DateTime.Now).DateTime,
                        expires: new DateTimeOffset(DateTime.Now.AddDays(1)).DateTime,
                        //Using HS256 Algorithm to encrypt Token
                        signingCredentials: new SigningCredentials(new SymmetricSecurityKey(key),
                                            SecurityAlgorithms.HmacSha256Signature)
                    );
                    var token = new JwtSecurityTokenHandler().WriteToken(JWToken);
                    return Ok(new { user = user, token = token });
                }
                else
                {
                    return Unauthorized();

                }
            }
            return Unauthorized();
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            if (ModelState.IsValid)
            {
                var user = new IdentityUser { UserName = request.Username, Email = request.Email, SecurityStamp = Guid.NewGuid().ToString() };
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

        [HttpGet("logout")]
        public async Task<IActionResult> Logout()
        {
            await SignInManager.SignOutAsync();

            return Ok();
        }
    }
}