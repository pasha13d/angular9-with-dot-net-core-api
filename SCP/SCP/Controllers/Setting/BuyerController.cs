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
    public class BuyerController : ControllerBase
    {
        private readonly DatabaseContext _context;
        public BuyerController(DatabaseContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Buyer>>> GetBuyer()
        {
            return await _context.Buyer.ToListAsync();
        }


        [HttpGet("{Id}")]
        public async Task<ActionResult<Buyer>> GetBuyer(int Id)
        {
            var buyerById = await _context.Buyer.FindAsync(Id);
            if (buyerById == null)
            {
                return NotFound();
            }
            return buyerById;
        }


        [HttpPost]
        public async Task<ActionResult<Buyer>> PostBuyer(Buyer Buyer)
        {
            _context.Buyer.Add(Buyer);
            await _context.SaveChangesAsync();
            return Ok(Buyer);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutBuyer(int Id, Buyer Buyer)
        {
            if (Id != Buyer.Id)
            {
                return BadRequest();
            }

            _context.Entry(Buyer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BuyerDetailExists(Id))
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
        public async Task<ActionResult<Buyer>> DeleteBuyer(int Id)
        {
            var buyerDetail = await _context.Buyer.FindAsync(Id);
            if (buyerDetail == null)
            {
                return NotFound();
            }

            _context.Buyer.Remove(buyerDetail);
            await _context.SaveChangesAsync();

            return buyerDetail;
        }

        private bool BuyerDetailExists(int Id)
        {
            return _context.Buyer.Any(e => e.Id == Id);
        }
    }
}
