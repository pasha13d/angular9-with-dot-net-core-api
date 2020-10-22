import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { SettingService } from 'src/app/services/setting/setting.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { ZipperModel } from 'src/app/models/setting/setting.model';
import { NotificationService } from 'src/app/services/notification.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'zipper-detail-list',
  templateUrl: './zipper-detail-list.component.html',
  styleUrls: ['./zipper-detail-list.component.css']
})
export class ZipperDetailListComponent implements OnInit {
    // SORT
    @ViewChild(MatSort) sort: MatSort;

    // PAGINATOR
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public service: SettingService, private toastr: NotificationService) { }
  
  ngOnInit(): void {
    this.service.getZipperDetails().subscribe( res => {
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
  dataSource;
  displayedColumns: string[] = ['Brand', 'Color', 'deleteZipper'];
  // dataSource = this.service.getZipperDetails();

  // populateForm(pd: ZipperModel) {
  //   this.service.zipperFormData = Object.assign({}, pd);
  // }
  
  // SEARCH
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  populateForm(zipper: ZipperModel) {
    this.service.zipperFormData = Object.assign({}, zipper);
  }
  
  onDelete(Id) {
    this.service.deleteZipper(Id)
    .subscribe(res =>{
      this.service.refreshZipperList();
      this.toastr.showError("Deleted");
    },
      err=>{
        console.log(err);
      })
  }
}
