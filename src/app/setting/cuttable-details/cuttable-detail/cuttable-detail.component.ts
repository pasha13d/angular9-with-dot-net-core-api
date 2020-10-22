import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/default.error-matcher';
import { NotificationService } from 'src/app/services/notification.service';
import { SettingService } from 'src/app/services/setting/setting.service';

@Component({
  selector: 'cuttable-detail',
  templateUrl: './cuttable-detail.component.html',
  styleUrls: ['./cuttable-detail.component.css']
})
export class CuttableDetailComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  
  constructor(public service: SettingService, private toastr: NotificationService) { }

  ngOnInit(): void {
    this.resetForm();
    this.service.getCuttableDetails();
    this.service.refreshCuttableList();
  }

  resetForm(form?: NgForm)
  {
    if(form != null)
      form.resetForm();
    this.service.cuttableFormData = {
      Id: 0,
      CuttableWidth: ''
    }
  }

  onSubmit(form: NgForm) {
    if(this.service.cuttableFormData.Id ==0)
    {
      this.insertRecord(form);
    }
    else
    {
      this.updateRecord(form);
      console.log(this.service.cuttableFormData);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postCuttable().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshCuttableList();
        this.toastr.showSucces("Saved Successfully");
      },
      err => {
        this.toastr.showError("Data can't save");
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putCuttable().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshCuttableList();
        this.toastr.showInfo("Data Updated");
      },
      err => {
        console.log(err);
        this.toastr.showError("Not updated yet")
      }
    )
   }

}
