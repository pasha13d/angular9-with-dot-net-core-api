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
    public class CountryController : ControllerBase
    {

        private readonly DatabaseContext _context;
        public CountryController(DatabaseContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Country>>> GetCountry()
        {
            return await _context.Country.ToListAsync();
        }


        [HttpGet("{Id}")]
        public async Task<ActionResult<Country>> GetCountry(int Id)
        {
            var countryById = await _context.Country.FindAsync(Id);
            if (countryById == null)
            {
                return NotFound();
            }
            return countryById;
        }


        [HttpPost]
        public async Task<ActionResult<Country>> PostCountry(Country Country)
        {
            _context.Country.Add(Country);
            await _context.SaveChangesAsync();
            return Ok(Country);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutCountry(int Id, Country Country)
        {
            if (Id != Country.Id)
            {
                return BadRequest();
            }

            _context.Entry(Country).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CountryDetailExists(Id))
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
        public async Task<ActionResult<Country>> DeleteCountry(int Id)
        {
            var countryDetail = await _context.Country.FindAsync(Id);
            if (countryDetail == null)
            {
                return NotFound();
            }

            _context.Country.Remove(countryDetail);
            await _context.SaveChangesAsync();

            return countryDetail;
        }

        private bool CountryDetailExists(int Id)
        {
            return _context.Country.Any(e => e.Id == Id);
        }
    }
}
