import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SupplierDetailModel } from '../models/setting/setting.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierDetailService {

  //declaration model for form
  // formData: SupplierDetailModel = new SupplierDetailModel();
  // supplierList: SupplierDetailModel[];

  // readonly rootURL = 'http://localhost:2900/api';

  constructor(private http: HttpClient) { }

  // postSupplierDetail() {
  //   return this.http.post('http://localhost:2900/api/Supplier/PostSupplierDetail', this.formData);
  // }

  // getSupplierDetail() {
  //   // return this.http.get(this.rootURL+'/Supplier/GetSupplierDetail').toPromise().then(res => this.supplierList = res as SupplierDetailModel[]);
  //   return this.http.get(this.rootURL+'/Supplier/GetSupplierDetail');
  // }


}
