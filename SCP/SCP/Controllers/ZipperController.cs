using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SCP.Context;
using SCP.Model.Setting;

namespace SCP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ZipperController : ControllerBase
    {
        private readonly DatabaseContext _context;
        public ZipperController(DatabaseContext context)
        {
            _context = context;
        }

        [Route("GetZipperDetails")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Zipper>>> GetZipperDetails()
        {
            return await _context.Zipper.ToListAsync();
        }

        [Route("GetZipperById")]
        [HttpGet("{Id}")]
        public async Task<ActionResult<Zipper>> GetZipperById(int Id)
        {
            var zipperById = await _context.Zipper.FindAsync(Id);
            if (zipperById == null)
            {
                return NotFound();
            }
            return zipperById;
        }

        //[Route("PostZipper")]
        [HttpPost]
        public async Task<ActionResult<Zipper>> PostZipper(Zipper Zipper)
        {
            _context.Zipper.Add(Zipper);
            await _context.SaveChangesAsync();
            return Ok(Zipper);
        }

        //[Route("PutZipper")]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutZipper(int Id, Zipper Zipper)
        {
            if (Id != Zipper.Id)
            {
                return BadRequest();
            }

            _context.Entry(Zipper).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ZipperDetailExists(Id))
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
        public async Task<ActionResult<Zipper>> DeleteZipper(int Id)
        {
            var zipperDetail = await _context.Zipper.FindAsync(Id);
            if (zipperDetail == null)
            {
                return NotFound();
            }

            _context.Zipper.Remove(zipperDetail);
            await _context.SaveChangesAsync();

            return zipperDetail;
        }

        private bool ZipperDetailExists(int Id)
        {
            return _context.Fabric.Any(e => e.Id == Id);
        }
    }
}
