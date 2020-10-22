import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllTafettaExpressModel, BuyerModel, ColorModel, CompanyModel, CountryModel, CurrencyModel, CuttableModel, ExpressModel, FabricModel, GSMModel, ShippingModel, SupplierDetailModel, TafettaExpressModel, TafettaModel, ZipperModel } from 'src/app/models/setting/setting.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  // ZIPPER
  zipperFormData: ZipperModel = new ZipperModel();
  zipperList: ZipperModel[];

  // FABRIC
  fabricFormormData: FabricModel = new FabricModel();
  fabricList: FabricModel[];

  // SUPPLIER
  supplierFormData: SupplierDetailModel = new SupplierDetailModel();
  supplierList: SupplierDetailModel[];

  //COMPANY
  companyFormData: CompanyModel = new CompanyModel();
  companyList: CompanyModel[];

  //BUYER
  buyerFormData: BuyerModel = new BuyerModel();
  buyerList: BuyerModel[];

  //SHIPPING
  shippingFormData: ShippingModel = new ShippingModel();
  shippingList: ShippingModel[];

  //COLOR
  colorFormData: ColorModel = new ColorModel();
  colorList: ColorModel[];

      //CURRENCY
  currencyFormData: CurrencyModel = new CurrencyModel();
  currencyList: CurrencyModel[];

  //COUNTRY
  countryFormData: CountryModel = new CountryModel();
  countryList: CountryModel[];

  //CUTTABLE
  cuttableFormData: CuttableModel = new CuttableModel();
  cuttableList: CuttableModel[];

  //GSM
  gsmFormData: GSMModel = new GSMModel();
  gsmList: GSMModel[];

   //EXPRESS
   expressFormData: ExpressModel = new ExpressModel();
   expressList: ExpressModel[];

  //TAFETTA
  tafettaFormData: TafettaModel = new TafettaModel();
  tafettaExpressFormData: TafettaExpressModel = new TafettaExpressModel();
  tafettaList: TafettaModel[];
  


  readonly rootURL = 'http://localhost:2900/api';

  constructor(private http: HttpClient) { }

  //*********** SUPPLIER **********

  postSupplierDetail() {
    return this.http.post(this.rootURL+'/Supplier', this.supplierFormData);
  }

  getSupplierDetail() {
    // return this.http.get(this.rootURL+'/Supplier/GetSupplierDetail').toPromise().then(res => this.supplierList = res as SupplierDetailModel[]);
    // return this.http.get(this.rootURL+'/Supplier/GetSupplierDetail');
    return this.http.get<SupplierDetailModel[]>(this.rootURL+'/Supplier/GetSupplierDetail');
  }

  putSupplier() {
    return this.http.put(this.rootURL+'/Supplier/'+this.supplierFormData.Id, this.supplierFormData)
  }

  deleteSupplier(Id) {
    return this.http.delete(this.rootURL+'/Supplier/'+Id);
  }

  refreshSupplierList(){
    this.http.get(this.rootURL+'/Supplier/GetSupplierDetail').toPromise().then(res => this.supplierList = res as SupplierDetailModel[]);
  }

  //*********** ZIPER **********

  postZipper() {
    return this.http.post(this.rootURL+'/Zipper', this.zipperFormData);
  }

  putZipper() {
    return this.http.put(this.rootURL+'/Zipper/'+this.zipperFormData.Id, this.zipperFormData)
  }

  getZipperDetails() {
    return this.http.get<ZipperModel[]>(this.rootURL+'/Zipper/GetZipperDetails');
  }

  refreshZipperList(){
    this.http.get(this.rootURL+'/Zipper/GetZipperDetails').toPromise().then(res => this.zipperList = res as ZipperModel[]);
  }

  deleteZipper(Id) {
    return this.http.delete(this.rootURL+'/Zipper/'+Id);
  }

// ********* FABRIC **********

  postFabric() {
    return this.http.post(this.rootURL+'/Fabric', this.fabricFormormData);
  }

  putFabric() {
    return this.http.put(this.rootURL+'/Fabric/'+this.fabricFormormData.Id, this.fabricFormormData)
  }

  getFabricDetails(): Observable<FabricModel[]> {
    return this.http.get<FabricModel[]>(this.rootURL+'/Fabric/GetFabricDetails');
  }

  deleteFabric(Id) {
    return this.http.delete(this.rootURL+'/Fabric/'+Id);
  }

  refreshFabricList(){
    this.http.get(this.rootURL+'/Fabric/GetFabricDetails').toPromise().then(res => this.fabricList = res as FabricModel[]);
  }

  // ********* COMPANY **********

  postCompany() {
    return this.http.post(this.rootURL+'/Company', this.companyFormData);
  }

  putCompany() {
    return this.http.put(this.rootURL+'/Company/'+this.companyFormData.Id, this.companyFormData)
  }

  getCompanyDetails(): Observable<CompanyModel[]> {
    return this.http.get<CompanyModel[]>(this.rootURL+'/Company');
  }

  deleteCompany(Id) {
    return this.http.delete(this.rootURL+'/Company/'+Id);
  }

  refreshCompanyList(){
    this.http.get(this.rootURL+'/Company').toPromise().then(res => this.companyList = res as CompanyModel[]);
  }

  // ********* BUYER **********

  postBuyer() {
    return this.http.post(this.rootURL+'/Buyer', this.buyerFormData);
  }

  putBuyer() {
    return this.http.put(this.rootURL+'/Buyer/'+this.buyerFormData.Id, this.buyerFormData)
  }

  getBuyerDetails(): Observable<BuyerModel[]> {
    return this.http.get<BuyerModel[]>(this.rootURL+'/Buyer');
  }

  deleteBuyer(Id) {
    return this.http.delete(this.rootURL+'/Buyer/'+Id);
  }

  refreshBuyerList(){
    this.http.get(this.rootURL+'/Buyer').toPromise().then(res => this.buyerList = res as BuyerModel[]);
  }

  // ********* SHIPPING **********

  postShipping() {
    return this.http.post(this.rootURL+'/Shipping', this.shippingFormData);
  }

  putShipping() {
    return this.http.put(this.rootURL+'/Shipping/'+this.shippingFormData.Id, this.shippingFormData)
  }

  getShippingDetails(): Observable<ShippingModel[]> {
    return this.http.get<ShippingModel[]>(this.rootURL+'/Shipping');
  }

  deleteShipping(Id) {
    return this.http.delete(this.rootURL+'/Shipping/'+Id);
  }

  refreshShippingList(){
    this.http.get(this.rootURL+'/Shipping').toPromise().then(res => this.shippingList = res as ShippingModel[]);
  }

  // ********* COLOR **********

  postColor() {
    return this.http.post(this.rootURL+'/Color', this.colorFormData);
  }

  putColor() {
    return this.http.put(this.rootURL+'/Color/'+this.colorFormData.Id, this.colorFormData)
  }

  getColorDetails(): Observable<ColorModel[]> {
    return this.http.get<ColorModel[]>(this.rootURL+'/Color');
  }

  deleteColor(Id) {
    return this.http.delete(this.rootURL+'/Color/'+Id);
  }

  refreshColorList(){
    this.http.get(this.rootURL+'/Color').toPromise().then(res => this.colorList = res as ColorModel[]);
  }

  // ********* CURRENCY **********

  postCurrency() {
    return this.http.post(this.rootURL+'/Currency', this.currencyFormData);
  }

  putCurrency() {
    return this.http.put(this.rootURL+'/Currency/'+this.currencyFormData.Id, this.currencyFormData)
  }

  getCurrencyDetails(): Observable<CurrencyModel[]> {
    return this.http.get<CurrencyModel[]>(this.rootURL+'/Currency');
  }

  deleteCurrency(Id) {
    return this.http.delete(this.rootURL+'/Currency/'+Id);
  }

  refreshCurrencyList(){
    this.http.get(this.rootURL+'/Currency').toPromise().then(res => this.currencyList = res as CurrencyModel[]);
  }

  // ********* COUNTRY **********

  postCountry() {
    return this.http.post(this.rootURL+'/Country', this.countryFormData);
  }

  putCountry() {
    return this.http.put(this.rootURL+'/Country/'+this.countryFormData.Id, this.countryFormData)
  }

  getCountryDetails(): Observable<CountryModel[]> {
    return this.http.get<CountryModel[]>(this.rootURL+'/Country');
  }

  deleteCountry(Id) {
    return this.http.delete(this.rootURL+'/Country/'+Id);
  }

  refreshCountryList(){
    this.http.get(this.rootURL+'/Country').toPromise().then(res => this.countryList = res as CountryModel[]);
  }

  // ********* CUTTABLE **********

  postCuttable() {
    return this.http.post(this.rootURL+'/Cuttable', this.cuttableFormData);
  }

  putCuttable() {
    return this.http.put(this.rootURL+'/Cuttable/'+this.cuttableFormData.Id, this.cuttableFormData)
  }

  getCuttableDetails(): Observable<CuttableModel[]> {
    return this.http.get<CuttableModel[]>(this.rootURL+'/Cuttable');
  }

  deleteCuttable(Id) {
    return this.http.delete(this.rootURL+'/Cuttable/'+Id);
  }

  refreshCuttableList(){
    this.http.get(this.rootURL+'/Cuttable').toPromise().then(res => this.cuttableList = res as CuttableModel[]);
  }

  // ********* GSM **********

  postGSM() {
    return this.http.post(this.rootURL+'/GSM', this.gsmFormData);
  }

  putGSM() {
    return this.http.put(this.rootURL+'/GSM/'+this.gsmFormData.Id, this.gsmFormData)
  }

  getGSMDetails(): Observable<GSMModel[]> {
    return this.http.get<GSMModel[]>(this.rootURL+'/GSM');
  }

  deleteGSM(Id) {
    return this.http.delete(this.rootURL+'/GSM/'+Id);
  }

  refreshGSMList(){
    this.http.get(this.rootURL+'/GSM').toPromise().then(res => this.gsmList = res as GSMModel[]);
  }

  
  // ********* Express **********

  postExpress() {
    return this.http.post(this.rootURL+'/Express', this.expressFormData);
  }

  putExpress() {
    return this.http.put(this.rootURL+'/Express/'+this.expressFormData.Id, this.expressFormData)
  }

  getExpressDetails(): Observable<ExpressModel[]> {
    return this.http.get<ExpressModel[]>(this.rootURL+'/Express');
  }

  deleteExpress(Id) {
    return this.http.delete(this.rootURL+'/Express/'+Id);
  }

  refreshExpressList(){
    this.http.get(this.rootURL+'/Express').toPromise().then(res => this.expressList = res as ExpressModel[]);
  }

// ********* TAFETTA **********
  
getAllBuyerList() {
  return this.http.get(this.rootURL+'/Buyer');
}

getAllFabricList() {
  return this.http.get(this.rootURL+'/Fabric/GetFabricDetails');
}

getAllColorList() {
  return this.http.get(this.rootURL+'/Color');
}

getAllCuttableWidthList() {
  return this.http.get(this.rootURL+'/Cuttable');
}

getAllGSMList() {
  return this.http.get(this.rootURL+'/GSM');
}

getAllSupplierList() {
  return this.http.get(this.rootURL+'/Supplier/GetSupplierDetail');
}

getAllExpressList() {
  return this.http.get(this.rootURL+'/Express');
}

getTafettaDetails(): Observable<TafettaModel[]> {
  return this.http.get<TafettaModel[]>(this.rootURL+'/Tafetta');
}

getTafettaF(): Observable<TafettaModel[]> {
  return this.http.get<TafettaModel[]>(this.rootURL+'/Tafetta/GetAllTafetta');
}


refreshTafettaList(){
  this.http.get(this.rootURL+'/Tafetta').toPromise().then(res => this.tafettaList = res as TafettaModel[]);
}

postTafetta(){
  return this.http.post(this.rootURL+'/Tafetta', this.tafettaExpressFormData);
}

putTafetta() {
  return this.http.put(this.rootURL+'/Tafetta/'+this.tafettaFormData.Id, this.tafettaFormData)
}

postTafettaFilter(): Observable<TafettaModel[]> {
  return this.http.post<TafettaModel[]>(this.rootURL+'/Tafetta/PostAllTafetta', this.tafettaFormData);
}

}
