using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SCP.Context;
using SCP.Model.Input;
using SCP.ViewModel;

namespace SCP.Controllers.Input
{
    [Route("api/[controller]")]
    [ApiController]
    public class TafettaController : ControllerBase
    {
        private readonly DatabaseContext _context;
        public TafettaController(DatabaseContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tafetta>>> GetTafetta()
        {
            return await _context.Tafetta.ToListAsync();
        }

        
        [HttpGet("{Id}")]
        public async Task<ActionResult<Tafetta>> GetTafetta(int Id)
        {
            var tafettaById = await _context.Tafetta.FindAsync(Id);
            if (tafettaById == null)
            {
                return NotFound();
            }
            return tafettaById;
        }

        [Route("PostAllTafetta")]
        [HttpPost]
        public ActionResult<List<TafettaViewModel>> PostAllTafetta(Tafetta Tafetta)
        {
            var tafetta = _context.Tafetta.Include(b=> b.Buyer)
                .Include(f=>f.Fabric)
                .Include(c=> c.Color)
                .Include(t => t.Cuttable)
                .Include(g => g.GSM)
                .Include(s => s.Supplier).Where(f=> f.BuyerId == Tafetta.BuyerId && f.FabricId == Tafetta.FabricId).ToList();

            List<TafettaViewModel> getTafetta = tafetta != null ?
                tafetta.Select(t => new TafettaViewModel
                {
                    Id = t.Id,
                    BuyerId = t.BuyerId,
                    BuyerName = t.Buyer.BuyerName,
                    FabricId = t.FabricId,
                    FabricType = t.Fabric.FabricType,
                    ColorId = t.ColorId,
                    ColorName = t.Color.ColorName,
                    FinishType = t.FinishType,
                    CuttableId = t.CuttableId,
                    CuttableWidth = t.Cuttable.CuttableWidth,
                    GSMId = t.GSMId,
                    GSMValue = t.GSM.GSMValue,
                    CurrentPrice = t.CurrentPrice,
                    TermOfPrice = t.TermOfPrice,
                    FOBSHANGHAI1 = t.FOBSHANGHAI1,
                    CNFCTG1 = t.CNFCTG1,
                    RemarksGSM = t.RemarksGSM,
                    ExFty = t.ExFty,
                    COMMENTS1 = t.COMMENTS1,

                    SupplierId = t.SupplierId,
                    SupplierName = t.Supplier.SupplierName,
                    SupplierOriginId = t.SupplierOriginId,
                    Origin = t.Supplier.Origin,

                    YearlyConsumeInYds = t.YearlyConsumeInYds,
                    PriceInAverage = t.PriceInAverage,
                    BDRepresentativeContact = t.BDRepresentativeContact,
                    SupplierType = t.SupplierType,
                    Remarks = t.Remarks,
                    //ExpressId = t.ExpressId,
                    //ExpressName = t.Express.Equals
                }).ToList()
                : new List<TafettaViewModel>();

            return Ok(getTafetta);
        }

        [HttpPost]
        public async Task<ActionResult<TafettaExpressViewModel>> PostTafetta(List<TafettaExpressViewModel> data)
        {

            //_context.Tafetta.Add(TafettaExpressVM);
            //await _context.SaveChangesAsync();
            //return Ok(TafettaExpressVM);
            return data.FirstOrDefault();
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutTafetta(int Id, Tafetta Tafetta)
        {
            if (Id != Tafetta.Id)
            {
                return BadRequest();
            }

            _context.Entry(Tafetta).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TafettaDetailExists(Id))
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

        private bool TafettaDetailExists(int Id)
        {
            return _context.Tafetta.Any(e => e.Id == Id);
        }

    }
}
