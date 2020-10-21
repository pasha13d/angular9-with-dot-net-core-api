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
    public class ExpressController : ControllerBase
    {
        private readonly DatabaseContext _context;
        public ExpressController(DatabaseContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Express>>> GetExpress()
        {
            return await _context.Express.ToListAsync();
        }


        [HttpGet("{Id}")]
        public async Task<ActionResult<Express>> GetExpress(int Id)
        {
            var expressById = await _context.Express.FindAsync(Id);
            if (expressById == null)
            {
                return NotFound();
            }
            return expressById;
        }


        [HttpPost]
        public async Task<ActionResult<Express>> PostExpress(Express Express)
        {
            _context.Express.Add(Express);
            await _context.SaveChangesAsync();
            return Ok(Express);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutExpress(int Id, Express Express)
        {
            if (Id != Express.Id)
            {
                return BadRequest();
            }

            _context.Entry(Express).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExpressDetailExists(Id))
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
        public async Task<ActionResult<Express>> DeleteExpress(int Id)
        {
            var expressDetail = await _context.Express.FindAsync(Id);
            if (expressDetail == null)
            {
                return NotFound();
            }

            _context.Express.Remove(expressDetail);
            await _context.SaveChangesAsync();

            return expressDetail;
        }

        private bool ExpressDetailExists(int Id)
        {
            return _context.Express.Any(e => e.Id == Id);
        }
    }
}
