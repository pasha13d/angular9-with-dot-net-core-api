import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ColorModel } from 'src/app/models/setting/setting.model';
import { NotificationService } from 'src/app/services/notification.service';
import { SettingService } from 'src/app/services/setting/setting.service';

@Component({
  selector: 'color-detail-list',
  templateUrl: './color-detail-list.component.html',
  styleUrls: ['./color-detail-list.component.css']
})
export class ColorDetailListComponent implements OnInit {
// SORT
@ViewChild(MatSort) sort: MatSort;

// PAGINATOR
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public service: SettingService, private toastr: NotificationService) { }

  ngOnInit(): void {
    this.service.refreshColorList();

    // SHOW & SHORT
    this.service.getColorDetails().subscribe(res => {
      if(!res) {
        return;
      }
      this.dataSource = new MatTableDataSource(res);
      // SORT
      this.dataSource.sort = this.sort;
      //PAGINATOR
      this.dataSource.paginator = this.paginator;
    });
    this.service.getColorDetails();
  }

  
  dataSource;
  displayedColumns: string[] = ['ColorName', 'deleteFabric'];

  
  // SEARCH
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //CELL CLICK AND BIND DATA INTO FORM
  populateForm(color: ColorModel) {
    this.service.colorFormData = Object.assign({}, color);
  }
  
  onDelete(Id) {
    this.service.deleteColor(Id)
    .subscribe(res =>{
      this.service.refreshColorList();
      this.toastr.showError("Deleted");
    },
      err=>{
        console.log(err);
      })
  }
  
}
