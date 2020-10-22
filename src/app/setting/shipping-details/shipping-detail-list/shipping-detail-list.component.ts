import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ShippingModel } from 'src/app/models/setting/setting.model';
import { NotificationService } from 'src/app/services/notification.service';
import { SettingService } from 'src/app/services/setting/setting.service';

@Component({
  selector: 'shipping-detail-list',
  templateUrl: './shipping-detail-list.component.html',
  styleUrls: ['./shipping-detail-list.component.css']
})

export class ShippingDetailListComponent implements OnInit {
// SORT
@ViewChild(MatSort) sort: MatSort;

// PAGINATOR
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public service: SettingService, private toastr: NotificationService) { }

  ngOnInit(): void {
    this.service.refreshShippingList();

    // SHOW & SHORT
    this.service.getShippingDetails().subscribe(res => {
      if(!res) {
        return;
      }
      this.dataSource = new MatTableDataSource(res);
      // SORT
      this.dataSource.sort = this.sort;
      //PAGINATOR
      this.dataSource.paginator = this.paginator;
    });
    this.service.getShippingDetails();
  }

   
  dataSource;
  displayedColumns: string[] = ['ShippingTerm', 'ShippingPort', 'deleteFabric'];

  
  // SEARCH
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //CELL CLICK AND BIND DATA INTO FORM
  populateForm(shipping: ShippingModel) {
    this.service.shippingFormData = Object.assign({}, shipping);
  }
  
  onDelete(Id) {
    this.service.deleteShipping(Id)
    .subscribe(res =>{
      this.service.refreshShippingList();
      this.toastr.showError("Deleted");
    },
      err=>{
        console.log(err);
      })
  }

}
