import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CurrencyModel } from 'src/app/models/setting/setting.model';
import { NotificationService } from 'src/app/services/notification.service';
import { SettingService } from 'src/app/services/setting/setting.service';

@Component({
  selector: 'currency-detail-list',
  templateUrl: './currency-detail-list.component.html',
  styleUrls: ['./currency-detail-list.component.css']
})
export class CurrencyDetailListComponent implements OnInit {
// SORT
@ViewChild(MatSort) sort: MatSort;

// PAGINATOR
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public service: SettingService, private toastr: NotificationService) { }

  ngOnInit(): void {
    this.service.refreshCurrencyList();

    // SHOW & SHORT
    this.service.getCurrencyDetails().subscribe(res => {
      if(!res) {
        return;
      }
      this.dataSource = new MatTableDataSource(res);
      // SORT
      this.dataSource.sort = this.sort;
      //PAGINATOR
      this.dataSource.paginator = this.paginator;
    });
    this.service.getCurrencyDetails();
  }

  
  dataSource;
  displayedColumns: string[] = ['CurrencyName', 'deleteFabric'];

  
  // SEARCH
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //CELL CLICK AND BIND DATA INTO FORM
  populateForm(currency: CurrencyModel) {
    this.service.currencyFormData = Object.assign({}, currency);
  }
  
  onDelete(Id) {
    this.service.deleteCurrency(Id)
    .subscribe(res =>{
      this.service.refreshCurrencyList();
      this.toastr.showError("Deleted");
    },
      err=>{
        console.log(err);
      })
  }

}
