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
    public class ShippingController : ControllerBase
    {
        private readonly DatabaseContext _context;
        public ShippingController(DatabaseContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Shipping>>> GetShipping()
        {
            return await _context.Shipping.ToListAsync();
        }


        [HttpGet("{Id}")]
        public async Task<ActionResult<Shipping>> GetShipping(int Id)
        {
            var shippingById = await _context.Shipping.FindAsync(Id);
            if (shippingById == null)
            {
                return NotFound();
            }
            return shippingById;
        }


        [HttpPost]
        public async Task<ActionResult<Shipping>> PostShipping(Shipping Shipping)
        {
            _context.Shipping.Add(Shipping);
            await _context.SaveChangesAsync();
            return Ok(Shipping);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutShipping(int Id, Shipping Shipping)
        {
            if (Id != Shipping.Id)
            {
                return BadRequest();
            }

            _context.Entry(Shipping).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShippingDetailExists(Id))
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
        public async Task<ActionResult<Shipping>> DeleteShipping(int Id)
        {
            var shippingDetail = await _context.Shipping.FindAsync(Id);
            if (shippingDetail == null)
            {
                return NotFound();
            }

            _context.Shipping.Remove(shippingDetail);
            await _context.SaveChangesAsync();

            return shippingDetail;
        }

        private bool ShippingDetailExists(int Id)
        {
            return _context.Fabric.Any(e => e.Id == Id);
        }
    }
}
