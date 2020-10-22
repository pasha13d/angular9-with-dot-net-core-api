import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BuyerModel } from 'src/app/models/setting/setting.model';
import { NotificationService } from 'src/app/services/notification.service';
import { SettingService } from 'src/app/services/setting/setting.service';

@Component({
  selector: 'buyer-detail-list',
  templateUrl: './buyer-detail-list.component.html',
  styleUrls: ['./buyer-detail-list.component.css']
})
export class BuyerDetailListComponent implements OnInit {
 // SORT
 @ViewChild(MatSort) sort: MatSort;

 // PAGINATOR
 @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
 
  constructor(public service: SettingService, private toastr: NotificationService) { }

  ngOnInit(): void {
    this.service.refreshBuyerList();

    // SHOW & SHORT
    this.service.getBuyerDetails().subscribe(res => {
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
  displayedColumns: string[] = ['BuyerName', 'BuyerAddress', 'deleteFabric'];

  
  // SEARCH
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //CELL CLICK AND BIND DATA INTO FORM
  populateForm(buyer: BuyerModel) {
    this.service.buyerFormData = Object.assign({}, buyer);
  }
  
  onDelete(Id) {
    this.service.deleteBuyer(Id)
    .subscribe(res =>{
      this.service.refreshBuyerList();
      this.toastr.showError("Deleted");
    },
      err=>{
        console.log(err);
      })
  }

}
