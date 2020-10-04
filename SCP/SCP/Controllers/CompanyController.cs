using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SCP.Context;
using SCP.Model;

namespace SCP.Controllers
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

        [Route("GetAllCompany")]
        [HttpGet]
        public ActionResult<List<Company>> GetAllCompany()
        {
            var companyList = _context.Company.ToList();
            return Ok(companyList);
        }
    }
}
