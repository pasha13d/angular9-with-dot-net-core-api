import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  formData: LoginModel = new LoginModel();

  readonly rootURL= "http://localhost:2900/api";

  constructor(private http: HttpClient) { }

  postLogin() {
    return this.http.post(this.rootURL+'/Registration/PostLogin', this.formData);
  }
}
