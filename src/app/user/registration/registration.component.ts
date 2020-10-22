import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/default.error-matcher';
import { NotificationService } from 'src/app/services/notification.service';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  constructor(public service: RegistrationService, private toastr: NotificationService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if(form!= null)
      form.resetForm();
    this.service.formData = {
      Id: 0,
      Name: '',
      Email: '',
      UserName: '',
      Password: ''
    }
  }

  onSubmit(form: NgForm) {
    if(this.service.formData.Id == 0)
    {
      this.insertRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postRegistration().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.showSucces("Registration Completed");
      },
      err => {
        this.toastr.showError("Not Registered Yet");
      }
    )
  }

}
