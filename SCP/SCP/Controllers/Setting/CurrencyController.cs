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
    public class CurrencyController : ControllerBase
    {

        private readonly DatabaseContext _context;
        public CurrencyController(DatabaseContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Currency>>> GetCurrency()
        {
            return await _context.Currency.ToListAsync();
        }


        [HttpGet("{Id}")]
        public async Task<ActionResult<Currency>> GetCurrency(int Id)
        {
            var currencyById = await _context.Currency.FindAsync(Id);
            if (currencyById == null)
            {
                return NotFound();
            }
            return currencyById;
        }


        [HttpPost]
        public async Task<ActionResult<Currency>> PostCurrency(Currency Currency)
        {
            _context.Currency.Add(Currency);
            await _context.SaveChangesAsync();
            return Ok(Currency);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutCurrency(int Id, Currency Currency)
        {
            if (Id != Currency.Id)
            {
                return BadRequest();
            }

            _context.Entry(Currency).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CurrencyDetailExists(Id))
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
        public async Task<ActionResult<Currency>> DeleteCurrency(int Id)
        {
            var currencyDetail = await _context.Currency.FindAsync(Id);
            if (currencyDetail == null)
            {
                return NotFound();
            }

            _context.Currency.Remove(currencyDetail);
            await _context.SaveChangesAsync();

            return currencyDetail;
        }

        private bool CurrencyDetailExists(int Id)
        {
            return _context.Currency.Any(e => e.Id == Id);
        }
    }
}
