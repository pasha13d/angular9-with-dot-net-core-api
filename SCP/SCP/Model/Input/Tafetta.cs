using SCP.Model.Setting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SCP.Model.Input
{
    public class Tafetta
    {
        public int Id { get; set; }
        public int BuyerId { get; set; }
        public int FabricId { get; set; }
        public int ColorId { get; set; }
        public string FinishType { get; set; }
        public int CuttableId { get; set; }
        public int GSMId { get; set; }
        public string CurrentPrice { get; set; }
        public string TermOfPrice { get; set; }
        public string FOBSHANGHAI1 { get; set; }
        public string CNFCTG1 { get; set; }
        public string RemarksGSM { get; set; }
        public string ExFty { get; set; }
        public string COMMENTS1 { get; set; }
        public int SupplierId { get; set; }
        public int SupplierOriginId { get; set; }
        public string YearlyConsumeInYds { get; set; }
        public string PriceInAverage { get; set; }
        public string BDRepresentativeContact { get; set; }
        public string SupplierType { get; set; }
        public string Remarks { get; set; }
        public int ExpressId { get; set; }

        public virtual Buyer Buyer { get; set; }
        public virtual Fabric Fabric { get; set; }
        public virtual Color Color { get; set; }
        public virtual Cuttable Cuttable { get; set; }
        public virtual GSM GSM { get; set; }
        public virtual Supplier Supplier { get; set; }
        public virtual Express Express { get; set; }
    }
}
