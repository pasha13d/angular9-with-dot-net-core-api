import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/default.error-matcher';
import { NotificationService } from 'src/app/services/notification.service';
import { SettingService } from 'src/app/services/setting/setting.service';

@Component({
  selector: 'gsm-detail',
  templateUrl: './gsm-detail.component.html',
  styleUrls: ['./gsm-detail.component.css']
})
export class GsmDetailComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  
  constructor(public service: SettingService, private toastr: NotificationService) { }

  ngOnInit(): void {
    this.resetForm();
    this.service.getGSMDetails();
    this.service.refreshGSMList();
  }

  resetForm(form?: NgForm)
  {
    if(form != null)
      form.resetForm();
    this.service.gsmFormData = {
      Id: 0,
      GSMValue: ''
    }
  }

  onSubmit(form: NgForm) {
    if(this.service.gsmFormData.Id ==0)
    {
      this.insertRecord(form);
    }
    else
    {
      this.updateRecord(form);
      console.log(this.service.gsmFormData);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postGSM().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshGSMList();
        this.toastr.showSucces("Saved Successfully");
      },
      err => {
        this.toastr.showError("Data can't save");
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putGSM().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshGSMList();
        this.toastr.showInfo("Data Updated");
      },
      err => {
        console.log(err);
        this.toastr.showError("Not updated yet")
      }
    )
   }

}
