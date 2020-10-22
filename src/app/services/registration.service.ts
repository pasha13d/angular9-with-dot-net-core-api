import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistrationModel } from '../models/registration.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  formData: RegistrationModel = new RegistrationModel();

  readonly rootURL= "http://localhost:2900/api";
  constructor(private http: HttpClient) { }

  postRegistration() {
    return this.http.post(this.rootURL+'/Registration/PostRegistration', this.formData);
  }
}
