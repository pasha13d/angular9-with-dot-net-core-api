import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  readonly rootURL = 'http://localhost:2900/api/Company';
  
  constructor(private http: HttpClient) { }

  getAllCompany() {
    return this.http.get(this.rootURL+'/GetAllCompany');
  }
}
