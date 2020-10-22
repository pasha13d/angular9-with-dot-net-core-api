import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/default.error-matcher';
import { NotificationService } from 'src/app/services/notification.service';
import { SettingService } from 'src/app/services/setting/setting.service';

@Component({
  selector: 'zipper-detail',
  templateUrl: './zipper-detail.component.html',
  styleUrls: ['./zipper-detail.component.css']
})
export class ZipperDetailComponent implements OnInit {
  
  matcher = new MyErrorStateMatcher();

  constructor(public service: SettingService, private toastr: NotificationService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm)
  {
    if(form != null)
      form.resetForm();
    this.service.zipperFormData = {
      Id: 0,
      Brand: '',
      Color: ''
    }
  }

  onSubmit(form: NgForm) {
    if(this.service.zipperFormData.Id ==0)
    {
      this.insertRecord(form);
    }
    else
    {
      this.updateRecord(form);
      console.log(this.service.zipperFormData);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postZipper().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.showSucces("Saved Successfully");
      },
      err => {
        this.toastr.showError("Data can't save");
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putZipper().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshZipperList();
        this.toastr.showInfo("Data Updated");
      },
      err => {
        console.log(err);
        this.toastr.showError("Not updated yet")
      }
    )
   }


}
