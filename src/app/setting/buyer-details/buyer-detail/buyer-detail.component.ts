import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/default.error-matcher';
import { NotificationService } from 'src/app/services/notification.service';
import { SettingService } from 'src/app/services/setting/setting.service';

@Component({
  selector: 'buyer-detail',
  templateUrl: './buyer-detail.component.html',
  styleUrls: ['./buyer-detail.component.css']
})
export class BuyerDetailComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  
  constructor(public service: SettingService, private toastr: NotificationService) { }

  ngOnInit(): void {
    this.resetForm();
    this.service.getBuyerDetails();
    this.service.refreshBuyerList();
  }

  resetForm(form?: NgForm)
  {
    if(form != null)
      form.resetForm();
    this.service.buyerFormData = {
      Id: 0,
      BuyerName: '',
      BuyerAddress: ''
    }
  }

  onSubmit(form: NgForm) {
    if(this.service.buyerFormData.Id ==0)
    {
      this.insertRecord(form);
    }
    else
    {
      this.updateRecord(form);
      console.log(this.service.buyerFormData);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postBuyer().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshBuyerList();
        this.toastr.showSucces("Saved Successfully");
      },
      err => {
        this.toastr.showError("Data can't save");
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putBuyer().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshBuyerList();
        this.toastr.showInfo("Data Updated");
      },
      err => {
        console.log(err);
        this.toastr.showError("Not updated yet")
      }
    )
   }

}
