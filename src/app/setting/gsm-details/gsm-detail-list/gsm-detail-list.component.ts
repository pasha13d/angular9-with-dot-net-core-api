import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GSMModel } from 'src/app/models/setting/setting.model';
import { NotificationService } from 'src/app/services/notification.service';
import { SettingService } from 'src/app/services/setting/setting.service';

@Component({
  selector: 'gsm-detail-list',
  templateUrl: './gsm-detail-list.component.html',
  styleUrls: ['./gsm-detail-list.component.css']
})
export class GsmDetailListComponent implements OnInit {
// SORT
@ViewChild(MatSort) sort: MatSort;

// PAGINATOR
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public service: SettingService, private toastr: NotificationService) { }

  ngOnInit(): void {
    this.service.refreshGSMList();

    // SHOW & SHORT
    this.service.getGSMDetails().subscribe(res => {
      if(!res) {
        return;
      }
      this.dataSource = new MatTableDataSource(res);
      // SORT
      this.dataSource.sort = this.sort;
      //PAGINATOR
      this.dataSource.paginator = this.paginator;
    });
    this.service.getGSMDetails();
  }
  
  
  dataSource;
  displayedColumns: string[] = ['GSMValue', 'deleteFabric'];

  
  // SEARCH
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //CELL CLICK AND BIND DATA INTO FORM
  populateForm(gsm: GSMModel) {
    this.service.gsmFormData = Object.assign({}, gsm);
  }
  
  onDelete(Id) {
    this.service.deleteGSM(Id)
    .subscribe(res =>{
      this.service.refreshGSMList();
      this.toastr.showError("Deleted");
    },
      err=>{
        console.log(err);
      })
  }

}
