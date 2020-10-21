using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SCP.Context;
using SCP.Model.Setting;

namespace SCP.Controllers.Setting
{
    [Route("api/[controller]")]
    [ApiController]
    public class GSMController : ControllerBase
    {
        private readonly DatabaseContext _context;
        public GSMController(DatabaseContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<GSM>>> GetGSM()
        {
            return await _context.GSM.ToListAsync();
        }


        [HttpGet("{Id}")]
        public async Task<ActionResult<GSM>> GetGSM(int Id)
        {
            var gsmById = await _context.GSM.FindAsync(Id);
            if (gsmById == null)
            {
                return NotFound();
            }
            return gsmById;
        }


        [HttpPost]
        public async Task<ActionResult<GSM>> PostGSM(GSM GSM)
        {
            _context.GSM.Add(GSM);
            await _context.SaveChangesAsync();
            return Ok(GSM);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutGSM(int Id, GSM GSM)
        {
            if (Id != GSM.Id)
            {
                return BadRequest();
            }

            _context.Entry(GSM).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GSMDetailExists(Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<GSM>> DeleteGSM(int Id)
        {
            var gsmDetail = await _context.GSM.FindAsync(Id);
            if (gsmDetail == null)
            {
                return NotFound();
            }

            _context.GSM.Remove(gsmDetail);
            await _context.SaveChangesAsync();

            return gsmDetail;
        }

        private bool GSMDetailExists(int Id)
        {
            return _context.GSM.Any(e => e.Id == Id);
        }
    }
}
