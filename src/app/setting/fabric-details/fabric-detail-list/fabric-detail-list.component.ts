import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SettingService } from 'src/app/services/setting/setting.service';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { FabricModel } from 'src/app/models/setting/setting.model';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'fabric-detail-list',
  templateUrl: './fabric-detail-list.component.html',
  styleUrls: ['./fabric-detail-list.component.css']
})
export class FabricDetailListComponent implements OnInit {
  // SORT
  @ViewChild(MatSort) sort: MatSort;

  // PAGINATOR
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public service: SettingService, private toastr: NotificationService) { }

  ngOnInit(): void {
    this.service.refreshFabricList();

    // SHOW & SHORT
    this.service.getFabricDetails().subscribe(res => {
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
  displayedColumns: string[] = ['index', 'FabricType', 'FabricDetails', 'FabricSwatch', 'SendingSample', 'deleteFabric'];

  // SEARCH
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //CELL CLICK AND BIND DATA INTO FORM
  populateForm(fabric: FabricModel) {
    this.service.fabricFormormData = Object.assign({}, fabric);
  }
  
  onDelete(Id) {
    this.service.deleteFabric(Id)
    .subscribe(res =>{
      this.service.refreshFabricList();
      this.toastr.showError("Deleted");
    },
      err=>{
        console.log(err);
      })
  }

}
