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
    public class ColorController : ControllerBase
    {

        private readonly DatabaseContext _context;
        public ColorController(DatabaseContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Color>>> GetColor()
        {
            return await _context.Color.ToListAsync();
        }


        [HttpGet("{Id}")]
        public async Task<ActionResult<Color>> GetColor(int Id)
        {
            var colorById = await _context.Color.FindAsync(Id);
            if (colorById == null)
            {
                return NotFound();
            }
            return colorById;
        }


        [HttpPost]
        public async Task<ActionResult<Color>> PostColor(Color Color)
        {
            _context.Color.Add(Color);
            await _context.SaveChangesAsync();
            return Ok(Color);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutColor(int Id, Color Color)
        {
            if (Id !=Color.Id)
            {
                return BadRequest();
            }

            _context.Entry(Color).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ColorDetailExists(Id))
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
        public async Task<ActionResult<Color>> DeleteColor(int Id)
        {
            var colorDetail = await _context.Color.FindAsync(Id);
            if (colorDetail == null)
            {
                return NotFound();
            }

            _context.Color.Remove(colorDetail);
            await _context.SaveChangesAsync();

            return colorDetail;
        }

        private bool ColorDetailExists(int Id)
        {
            return _context.Color.Any(e => e.Id == Id);
        }
    }
}
