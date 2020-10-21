using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SCP.Model.Setting
{
    public class Shipping
    {
        public int Id { get; set; }
        public string ShippingTerm { get; set; }
        public string ShippingPort { get; set; }
    }
}
