using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SCP.ViewModel
{
    public class TafettaViewModel
    {
        public int Id { get; set; }
       
        public int BuyerId { get; set; }
        public string BuyerName { get; set; }
        public int FabricId { get; set; }
        public string FabricType { get; set; }
        public int ColorId { get; set; }
        public string ColorName { get; set; }

        public string FinishType { get; set; }

        public int CuttableId { get; set; }
        public string CuttableWidth { get; set; }
        public int GSMId { get; set; }
        public string GSMValue { get; set; }

        public string CurrentPrice { get; set; }
        public string TermOfPrice { get; set; }
        public string FOBSHANGHAI1 { get; set; }
        public string CNFCTG1 { get; set; }
        public string FOBSHANGHAI2 { get; set; }
        public string CNFCTG2 { get; set; }
        public string CNFCTG3 { get; set; }
        public string CNFCTG4 { get; set; }
        public string RemarksGSM { get; set; }
        public string ExFty { get; set; }
        public string CNFCTG5 { get; set; }
        public string COMMENTS1 { get; set; }
        public string CNFCTG6 { get; set; }
        public string CNFCTG7 { get; set; }
        public string COMMENTS2 { get; set; }
        public string CNFCTG8 { get; set; }
        public string CNFCTG9 { get; set; }
        public string FOB { get; set; }
        public string CNFCTG10 { get; set; }
        public string CNFCTG11 { get; set; }

        public int SupplierId { get; set; }
        public string SupplierName { get; set; }
        public int SupplierOriginId { get; set; }
        public string Origin { get; set; }

        public string YearlyConsumeInYds { get; set; }
        public string PriceInAverage { get; set; }
        public string BDRepresentativeContact { get; set; }
        public string SupplierType { get; set; }
        public string Remarks { get; set; }


    }
}
