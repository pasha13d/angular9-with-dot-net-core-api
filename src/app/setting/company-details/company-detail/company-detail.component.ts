import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { MyErrorStateMatcher } from 'src/app/default.error-matcher';
import { SettingService } from 'src/app/services/setting/setting.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  
  constructor(public service: SettingService, private toastr: NotificationService) { }

  ngOnInit(): void {
    this.resetForm();
    this.service.getCompanyDetails();
    this.service.refreshCompanyList();
  }

  resetForm(form?: NgForm)
  {
    if(form != null)
      form.resetForm();
    this.service.companyFormData = {
      Id: 0,
      CompanyCode: '',
      CompanyName: '',
      CompanyAddress: ''
    }
  }

  onSubmit(form: NgForm) {
    if(this.service.companyFormData.Id ==0)
    {
      this.insertRecord(form);
    }
    else
    {
      this.updateRecord(form);
      console.log(this.service.companyFormData);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postCompany().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshCompanyList();
        this.toastr.showSucces("Saved Successfully");
      },
      err => {
        this.toastr.showError("Data can't save");
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putCompany().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshCompanyList();
        this.toastr.showInfo("Data Updated");
      },
      err => {
        console.log(err);
        this.toastr.showError("Not updated yet")
      }
    )
   }


}
