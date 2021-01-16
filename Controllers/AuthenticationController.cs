
using Eventana.Models.Actions;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Eventana.Controllers {
    [Route("/api/authentication")]
    [ApiController]
    public class AuthenticationController : ControllerBase {
        
        [HttpGet("login")]
        public IActionResult Get(){
            string jaja = "Bobo";

            return Ok(new LoginRequest() {Username = "sadman", Password ="bruh"});
        } 

        [HttpPost("login")]
        public IActionResult Post([FromBody]LoginRequest credentials){
            
            string username = credentials.Username;
            string password = credentials.Password;
            return Ok(username);
        }
    }
}