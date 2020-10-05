using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SCP.Context;
using SCP.Model;

namespace SCP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SupplierController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public SupplierController(DatabaseContext context)
        {
            _context = context;
        }

        [Route("GetSupplierDetail")]
        public async Task<ActionResult<IEnumerable<Supplier>>> GetSupplierDetail()
        {
            return await _context.Supplier.ToListAsync();
        }

        [Route("GetSupplierDetail/{Id}")]
        [HttpGet("{Id}")]
        public async Task<ActionResult<Supplier>> GetSupplierDetail(int Id)
        {
            var supplierDetails =  await _context.Supplier.FindAsync(Id);
            if(supplierDetails == null)
            {
                return NotFound();
            }
            return supplierDetails;
        }

        [Route("PostSupplierDetail")]
        [HttpPost]
        public async Task<ActionResult<Supplier>> PostSupplierDetail(Supplier Supplier)
        {
            _context.Supplier.Add(Supplier);
            await _context.SaveChangesAsync();
            return Ok(Supplier);
        }

    }
}
