using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SCP.Context;
using SCP.Model;
using SCP.ViewModels;

namespace SCP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly DatabaseContext _context;
        public RegistrationController(DatabaseContext context)
        {
            _context = context;
        }

        [Route("PostRegistration")]
        [HttpPost]
        public async Task<ActionResult<Registration>> PostRegistration(Registration Registration)
        {
            _context.Registration.Add(Registration);
            await _context.SaveChangesAsync();
            return Ok(Registration);
        }

        [Route("PostLogin")]
        [HttpPost]
        public async Task<ActionResult<Registration>> PostLogin(Registration Registration)
        {
            var login = _context.Registration.FirstOrDefault(f=>f.UserName == Registration.UserName && f.Password == Registration.Password);
            if(login!=null)
                return Ok(login);
            else
                return NotFound();
        }

    }
}
