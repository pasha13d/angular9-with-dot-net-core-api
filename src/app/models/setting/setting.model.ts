export class FabricModel {
    Id: number;
    FabricType: string;
    FabricDetails: string;
    FabricSwatch: string;
    SendingSample: string
}

export class ZipperModel {
    Id: number;
    Brand: string;
    Color: string
}

export class SupplierDetailModel {
    Id: number;
    SupplierName: string;
    Origin: string;
    Address: string;
    Contact: string;
    Email: string;
}

export class CompanyModel {
    Id: number;
    CompanyCode: string;
    CompanyName: string;
    CompanyAddress: string
}

export class BuyerModel {
    Id: Number;
    BuyerName: string;
    BuyerAddress: string
}

export class ShippingModel {
    Id: number;
    ShippingTerm: string;
    ShippingPort: string;
}

export class ColorModel {
    Id: number;
    ColorName: string
}

export class CurrencyModel {
    Id: number;
    CurrencyName: string
}

export class CountryModel {
    Id: number;
    CountryCode: string;
    CountryName: string
}

export class CuttableModel {
    Id: number;
    CuttableWidth: string
}

export class GSMModel {
    Id: number;
    GSMValue: string
}

export class ExpressModel {
    Id: number;
    ExpressName: string
}

export class TafettaModel {
    Id: number;
    BuyerId: number;
    FabricId: number;
    ColorId: number;
    FinishType: string;
    CuttableId:number;
    GSMId: number;
    CurrentPrice: string;
    TermOfPrice: string;
    FOBSHANGHAI1: string;
    CNFCTG1: string;
    ExFty: string;
    ExpressId: number;
    RemarksGSM: string;
    COMMENTS1: string;
    SupplierId: number;
    SupplierOriginId: number;
    YearlyConsumeInYds: string;
    PriceInAverage: string;
    BDRepresentativeContact: string;
    SupplierType: string;
    Remarks: string;
}

export class TafettaExpressModel {
    Id: number;
    BuyerId: number;
    FabricId: number;
    ColorId: number;
    FinishType: string;
    CuttableId:number;
    GSMId: number;
    CurrentPrice: string;
    TermOfPrice: string;
    RemarksGSM: string;
    COMMENTS1: string;
    SupplierId: number;
    SupplierOriginId: number;
    YearlyConsumeInYds: string;
    PriceInAverage: string;
    BDRepresentativeContact: string;
    SupplierType: string;
    Remarks: string;
    ExpressList: ExpressList[]
}
export class ExpressList {
    FOBSHANGHAI1: string;
    CNFCTG1: string;
    ExFty: string;
    ExpressId: number;
}
export class AllTafettaExpressModel {
    Id: number;
    TafettaExpressModelList: TafettaExpressModel[]
}

