import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CompanyModel } from 'src/app/models/setting/setting.model';
import { NotificationService } from 'src/app/services/notification.service';
import { SettingService } from 'src/app/services/setting/setting.service';

@Component({
  selector: 'company-detail-list',
  templateUrl: './company-detail-list.component.html',
  styleUrls: ['./company-detail-list.component.css']
})
export class CompanyDetailListComponent implements OnInit {
  // SORT
  @ViewChild(MatSort) sort: MatSort;

  // PAGINATOR
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public service: SettingService, private toastr: NotificationService) { }

  ngOnInit(): void {
    this.service.refreshCompanyList();

    // SHOW & SHORT
    this.service.getCompanyDetails().subscribe(res => {
      if(!res) {
        return;
      }
      this.dataSource = new MatTableDataSource(res);
      // SORT
      this.dataSource.sort = this.sort;
      //PAGINATOR
      this.dataSource.paginator = this.paginator;
    });
    this.service.getFabricDetails();
  }

  dataSource;
  displayedColumns: string[] = ['CompanyCode', 'CompanyName', 'CompanyAddress', 'deleteFabric'];

  
  // SEARCH
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //CELL CLICK AND BIND DATA INTO FORM
  populateForm(fabric: CompanyModel) {
    this.service.companyFormData = Object.assign({}, fabric);
  }
  
  onDelete(Id) {
    this.service.deleteCompany(Id)
    .subscribe(res =>{
      this.service.refreshCompanyList();
      this.toastr.showError("Deleted");
    },
      err=>{
        console.log(err);
      })
  }

}
