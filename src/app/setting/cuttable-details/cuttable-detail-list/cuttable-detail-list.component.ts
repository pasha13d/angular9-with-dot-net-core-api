import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CuttableModel } from 'src/app/models/setting/setting.model';
import { NotificationService } from 'src/app/services/notification.service';
import { SettingService } from 'src/app/services/setting/setting.service';

@Component({
  selector: 'cuttable-detail-list',
  templateUrl: './cuttable-detail-list.component.html',
  styleUrls: ['./cuttable-detail-list.component.css']
})
export class CuttableDetailListComponent implements OnInit {
// SORT
@ViewChild(MatSort) sort: MatSort;

// PAGINATOR
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public service: SettingService, private toastr: NotificationService) { }

  ngOnInit(): void {
    this.service.refreshCuttableList();

    // SHOW & SHORT
    this.service.getCuttableDetails().subscribe(res => {
      if(!res) {
        return;
      }
      this.dataSource = new MatTableDataSource(res);
      // SORT
      this.dataSource.sort = this.sort;
      //PAGINATOR
      this.dataSource.paginator = this.paginator;
    });
    this.service.getCuttableDetails();
  }

  
  dataSource;
  displayedColumns: string[] = ['CuttableWidth', 'deleteFabric'];

  
  // SEARCH
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //CELL CLICK AND BIND DATA INTO FORM
  populateForm(cuttable: CuttableModel) {
    this.service.cuttableFormData = Object.assign({}, cuttable);
  }
  
  onDelete(Id) {
    this.service.deleteCuttable(Id)
    .subscribe(res =>{
      this.service.refreshCuttableList();
      this.toastr.showError("Deleted");
    },
      err=>{
        console.log(err);
      })
  }

}
