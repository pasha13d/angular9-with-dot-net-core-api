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
    public class FabricController : ControllerBase
    {
        private readonly DatabaseContext _context;
        public FabricController(DatabaseContext context)
        {
            _context = context;
        }

        [Route("GetFabricDetails")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Fabric>>> FetFabricDetails()
        {
            return await _context.Fabric.ToListAsync();
        }

        [Route("GetFabricById")]
        [HttpGet("{Id}")]
        public async Task<ActionResult<Fabric>> GetFabricById(int Id)
        {
            var fabricById = await _context.Fabric.FindAsync(Id);
            if (fabricById == null)
            {
                return NotFound();
            }
            return fabricById;
        }

        //[Route("PostFabric")]
        [HttpPost]
        public async Task<ActionResult<Fabric>> PostFabric(Fabric Fabric)
        {
            _context.Fabric.Add(Fabric);
            await _context.SaveChangesAsync();
            return Ok(Fabric);
        }

        //[Route("PutFabric")]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFabric(int Id, Fabric Fabric)
        {
            if (Id != Fabric.Id)
            {
                return BadRequest();
            }

            _context.Entry(Fabric).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FabricDetailExists(Id))
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

        //DELETE
        //[Route("DeleteFabric")]
        [HttpDelete("{id}")]
        public async Task<ActionResult<Fabric>> DeleteFabric(int Id)
        {
            var fabricDetail = await _context.Fabric.FindAsync(Id);
            if (fabricDetail == null)
            {
                return NotFound();
            }

            _context.Fabric.Remove(fabricDetail);
            await _context.SaveChangesAsync();

            return fabricDetail;
        }

        private bool FabricDetailExists(int Id)
        {
            return _context.Fabric.Any(e => e.Id == Id);
        }
    }
}
