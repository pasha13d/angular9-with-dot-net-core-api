import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CountryModel } from 'src/app/models/setting/setting.model';
import { NotificationService } from 'src/app/services/notification.service';
import { SettingService } from 'src/app/services/setting/setting.service';

@Component({
  selector: 'country-detail-list',
  templateUrl: './country-detail-list.component.html',
  styleUrls: ['./country-detail-list.component.css']
})
export class CountryDetailListComponent implements OnInit {
// SORT
@ViewChild(MatSort) sort: MatSort;

// PAGINATOR
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public service: SettingService, private toastr: NotificationService) { }

  ngOnInit(): void {
    this.service.refreshCountryList();

    // SHOW & SHORT
    this.service.getCountryDetails().subscribe(res => {
      if(!res) {
        return;
      }
      this.dataSource = new MatTableDataSource(res);
      // SORT
      this.dataSource.sort = this.sort;
      //PAGINATOR
      this.dataSource.paginator = this.paginator;
    });
    this.service.getCountryDetails();
  }
   
  dataSource;
  displayedColumns: string[] = ['CountryCode', 'CountryName', 'deleteFabric'];

  
  // SEARCH
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //CELL CLICK AND BIND DATA INTO FORM
  populateForm(country: CountryModel) {
    this.service.countryFormData = Object.assign({}, country);
  }
  
  onDelete(Id) {
    this.service.deleteCountry(Id)
    .subscribe(res =>{
      this.service.refreshCountryList();
      this.toastr.showError("Deleted");
    },
      err=>{
        console.log(err);
      })
  }

}
