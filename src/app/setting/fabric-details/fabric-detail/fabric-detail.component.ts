import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/default.error-matcher';
import { NotificationService } from 'src/app/services/notification.service';
import { SettingService } from 'src/app/services/setting/setting.service';

@Component({
  selector: 'fabric-detail',
  templateUrl: './fabric-detail.component.html',
  styleUrls: ['./fabric-detail.component.css']
})
export class FabricDetailComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  constructor(public service: SettingService, private toastr: NotificationService) { }

  ngOnInit(): void {
    this.resetForm();
    this.service.getFabricDetails();
    this.service.refreshFabricList();
  }

  resetForm(form?: NgForm)
  {
    if(form != null)
      form.resetForm();
    this.service.fabricFormormData = {
      Id: 0,
      FabricType: '',
      FabricDetails: '',
      FabricSwatch: '',
      SendingSample: ''
    }
  }

  onSubmit(form: NgForm) {
    if(this.service.fabricFormormData.Id ==0)
    {
      this.insertRecord(form);
    }
    else
    {
      this.updateRecord(form);
      console.log(this.service.fabricFormormData);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postFabric().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshFabricList();
        console.log("refresh", this.service.refreshFabricList());
        this.toastr.showSucces("Saved Successfully");
      },
      err => {
        this.toastr.showError("Data can't save");
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putFabric().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshFabricList();
        this.toastr.showInfo("Data Updated");
      },
      err => {
        console.log(err);
        this.toastr.showError("Not updated yet")
      }
    )
   }


}
