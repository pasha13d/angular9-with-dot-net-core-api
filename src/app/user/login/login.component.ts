import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyErrorStateMatcher } from 'src/app/default.error-matcher';
import { LoginService } from 'src/app/services/login.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  constructor(public service: LoginService, private toastr: NotificationService, public router: Router) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm)
  {
    if(form != null)
      form.resetForm();
    this.service.formData = {
      UserName: '',
      Password: ''
    }
  }

  onSubmit(form: NgForm) {
      this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postLogin().subscribe(
      res => {
        this.resetForm(form);
        this.router.navigateByUrl('/home');
        this.toastr.showSucces("Logged In");

      },
      err => {
        this.router.navigateByUrl('/login')
        this.toastr.showError("Can't Login");
      }
    )
  }

}
