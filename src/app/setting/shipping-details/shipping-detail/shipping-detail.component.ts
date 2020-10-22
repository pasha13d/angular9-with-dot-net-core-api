import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/default.error-matcher';
import { NotificationService } from 'src/app/services/notification.service';
import { SettingService } from 'src/app/services/setting/setting.service';

@Component({
  selector: 'shipping-detail',
  templateUrl: './shipping-detail.component.html',
  styleUrls: ['./shipping-detail.component.css']
})
export class ShippingDetailComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  
  constructor(public service: SettingService, private toastr: NotificationService) { }

  ngOnInit(): void {
    this.resetForm();
    this.service.getShippingDetails();
    this.service.refreshShippingList();
  }

  resetForm(form?: NgForm)
  {
    if(form != null)
      form.resetForm();
    this.service.shippingFormData = {
      Id: 0,
      ShippingTerm: '',
      ShippingPort: ''
    }
  }

  onSubmit(form: NgForm) {
    if(this.service.shippingFormData.Id ==0)
    {
      this.insertRecord(form);
    }
    else
    {
      this.updateRecord(form);
      console.log(this.service.shippingFormData);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postShipping().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshShippingList();
        this.toastr.showSucces("Saved Successfully");
      },
      err => {
        this.toastr.showError("Data can't save");
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putShipping().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshShippingList();
        this.toastr.showInfo("Data Updated");
      },
      err => {
        console.log(err);
        this.toastr.showError("Not updated yet")
      }
    )
   }

}
