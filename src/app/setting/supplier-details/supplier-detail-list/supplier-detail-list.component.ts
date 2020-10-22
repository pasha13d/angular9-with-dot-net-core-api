import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
// import { SupplierDetailService } from 'src/app/services/supplier-detail.service';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SupplierDetailModel } from 'src/app/models/setting/setting.model';
import { NotificationService } from 'src/app/services/notification.service';
import { SettingService } from 'src/app/services/setting/setting.service';

@Component({
  selector: 'supplier-detail-list',
  templateUrl: './supplier-detail-list.component.html',
  styleUrls: ['./supplier-detail-list.component.css']
})
export class SupplierDetailListComponent implements OnInit {
  // SORT
  @ViewChild(MatSort) sort: MatSort;

  // PAGINATOR
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public service: SettingService, private toastr: NotificationService) { }

  ngOnInit(): void {
    // this.service.getSupplierDetail();
    this.service.getSupplierDetail().subscribe( res => {
      if(!res)
      {
        return;
      }
      this.dataSource = new MatTableDataSource(res);
       // SORT
       this.dataSource.sort = this.sort;
       //PAGINATOR
       this.dataSource.paginator = this.paginator;
    });
  }

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource;
  displayedColumns: string[] = ['SupplierName', 'Origin', 'Address', 'Contact', 'Email', 'deleteFabric'];
  // dataSource = this.service.getSupplierDetail();
  // @ViewChild(MatSort) sort: MatSort;

  // SEARCH
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  populateForm(supplier: SupplierDetailModel) {
    this.service.supplierFormData = Object.assign({}, supplier);
  }
  
  onDelete(Id) {
    this.service.deleteSupplier(Id)
    .subscribe(res =>{
      this.service.refreshSupplierList();
      this.toastr.showError("Deleted");
    },
      err=>{
        console.log(err);
      })
  }

}
