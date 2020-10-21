using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SCP.Model.Setting
{
    public class Fabric
    {
        public int Id { get; set; }
        public string FabricType { get; set; }
        public string FabricDetails { get; set; }
        public string FabricSwatch { get; set; }
        public string SendingSample { get; set; }
    }
}
