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
    public class CompanyController : ControllerBase
    {
        private readonly DatabaseContext _context;
        public CompanyController(DatabaseContext context)
        {
            _context = context;
        }

        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Company>>> GetCompany()
        {
            return await _context.Company.ToListAsync();
        }

       //api/Company
        [HttpGet("{Id}")]
        public async Task<ActionResult<Company>> GetCompany(int Id)
        {
            var companyById = await _context.Company.FindAsync(Id);
            if (companyById == null)
            {
                return NotFound();
            }
            return companyById;
        }

       
        [HttpPost]
        public async Task<ActionResult<Company>> PostCompany(Company Company)
        {
            _context.Company.Add(Company);
            await _context.SaveChangesAsync();
            return Ok(Company);
        }

       
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompany(int Id, Company Company)
        {
            if (Id != Company.Id)
            {
                return BadRequest();
            }

            _context.Entry(Company).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompanyDetailExists(Id))
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
        public async Task<ActionResult<Company>> DeleteCompany(int Id)
        {
            var companyDetail = await _context.Company.FindAsync(Id);
            if (companyDetail == null)
            {
                return NotFound();
            }

            _context.Company.Remove(companyDetail);
            await _context.SaveChangesAsync();

            return companyDetail;
        }

        private bool CompanyDetailExists(int Id)
        {
            return _context.Fabric.Any(e => e.Id == Id);
        }
    }
}
