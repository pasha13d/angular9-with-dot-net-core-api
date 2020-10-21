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
    public class CuttableController : ControllerBase
    {
        private readonly DatabaseContext _context;
        public CuttableController(DatabaseContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cuttable>>> GetCuttable()
        {
            return await _context.Cuttable.ToListAsync();
        }


        [HttpGet("{Id}")]
        public async Task<ActionResult<Cuttable>> GetCuttable(int Id)
        {
            var cuttableById = await _context.Cuttable.FindAsync(Id);
            if (cuttableById == null)
            {
                return NotFound();
            }
            return cuttableById;
        }


        [HttpPost]
        public async Task<ActionResult<Cuttable>> PostCuttable(Cuttable Cuttable)
        {
            _context.Cuttable.Add(Cuttable);
            await _context.SaveChangesAsync();
            return Ok(Cuttable);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutCuttable(int Id, Cuttable Cuttable)
        {
            if (Id != Cuttable.Id)
            {
                return BadRequest();
            }

            _context.Entry(Cuttable).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CuttableDetailExists(Id))
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
        public async Task<ActionResult<Cuttable>> DeleteCuttable(int Id)
        {
            var cuttableDetail = await _context.Cuttable.FindAsync(Id);
            if (cuttableDetail == null)
            {
                return NotFound();
            }

            _context.Cuttable.Remove(cuttableDetail);
            await _context.SaveChangesAsync();

            return cuttableDetail;
        }

        private bool CuttableDetailExists(int Id)
        {
            return _context.Cuttable.Any(e => e.Id == Id);
        }
    }
}
