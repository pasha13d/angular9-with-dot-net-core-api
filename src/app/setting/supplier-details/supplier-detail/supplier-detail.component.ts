import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/default.error-matcher';
import { NotificationService } from 'src/app/services/notification.service';
import { SettingService } from 'src/app/services/setting/setting.service';
// import { SupplierDetailService } from 'src/app/services/supplier-detail.service';

@Component({
  selector: 'supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.css']
})
export class SupplierDetailComponent implements OnInit {

  matcher = new MyErrorStateMatcher();
   
  constructor(public service: SettingService, private toastr: NotificationService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm)
  {
    if(form != null)
      form.resetForm();
    this.service.supplierFormData = {
      Id: 0,
      SupplierName: '',
      Origin: '',
      Address: '',
      Contact: '',
      Email: ''
    }
  }
  // SupplierName: string = null;
  // Origin: string = null;
  // Address: string = null;
  // Contact: string = null;
  // Email: string = null;
  // clear() {
  //   this.Origin = '';
  //   this.Address = '';
  //   this.Contact = '';
  //   this.Email = ''
  // }

  onSubmit(form: NgForm) {
    if(this.service.supplierFormData.Id ==0)
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
    this.service.postSupplierDetail().subscribe(
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
    this.service.putSupplier().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshSupplierList();
        this.toastr.showInfo("Data Updated");
      },
      err => {
        console.log(err);
        this.toastr.showError("Not updated yet")
      }
    )
   }

}
