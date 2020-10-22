import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ExpressModel } from 'src/app/models/setting/setting.model';
import { NotificationService } from 'src/app/services/notification.service';
import { SettingService } from 'src/app/services/setting/setting.service';

@Component({
  selector: 'express-detail-list',
  templateUrl: './express-detail-list.component.html',
  styleUrls: ['./express-detail-list.component.css']
})
export class ExpressDetailListComponent implements OnInit {
// SORT
@ViewChild(MatSort) sort: MatSort;

// PAGINATOR
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public service: SettingService, private toastr: NotificationService) { }

  ngOnInit(): void {
    this.service.refreshExpressList();

    // SHOW & SHORT
    this.service.getExpressDetails().subscribe(res => {
      if(!res) {
        return;
      }
      this.dataSource = new MatTableDataSource(res);
      // SORT
      this.dataSource.sort = this.sort;
      //PAGINATOR
      this.dataSource.paginator = this.paginator;
    });
    this.service.getExpressDetails();
  }

  
  dataSource;
  displayedColumns: string[] = ['ExpressName', 'deleteExpress'];

  
  // SEARCH
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //CELL CLICK AND BIND DATA INTO FORM
  populateForm(express: ExpressModel) {
    this.service.expressFormData = Object.assign({}, express);
  }
  
  onDelete(Id) {
    this.service.deleteExpress(Id)
    .subscribe(res =>{
      this.service.refreshExpressList();
      this.toastr.showError("Deleted");
    },
      err=>{
        console.log(err);
      })
  }

}
