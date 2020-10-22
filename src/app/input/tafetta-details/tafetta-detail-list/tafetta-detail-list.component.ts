import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MyErrorStateMatcher } from 'src/app/default.error-matcher';
import { TafettaModel } from 'src/app/models/setting/setting.model';
import { NotificationService } from 'src/app/services/notification.service';
import { SettingService } from 'src/app/services/setting/setting.service';

@Component({
  selector: 'tafetta-detail-list',
  templateUrl: './tafetta-detail-list.component.html',
  styleUrls: ['./tafetta-detail-list.component.css']
})
export class TafettaDetailListComponent implements OnInit {

// SORT
@ViewChild(MatSort) sort: MatSort;

// PAGINATOR
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

 //DDL
 buyerList;
 fabricList;
 colorList;
 cuttableList;
 gsmList;
 supplierList

 matcher = new MyErrorStateMatcher();
 
 
  constructor(public service: SettingService, private toastr: NotificationService) { }

  ngOnInit(): void {

    this.service.getAllBuyerList().subscribe(buyerList=> {this.buyerList = buyerList});
    //Fabric
    this.service.getAllFabricList().subscribe(fabricList=> {this.fabricList = fabricList});
    //Color
    this.service.getAllColorList().subscribe(colorList=> {this.colorList = colorList});
    //Cuttable
    this.service.getAllCuttableWidthList().subscribe(cuttableList=> {this.cuttableList = cuttableList});
    //GSM
    this.service.getAllGSMList().subscribe(gsmList=> {this.gsmList = gsmList});
    //Supplier
    this.service.getAllSupplierList().subscribe(supplierList=> {this.supplierList = supplierList});

  }

  // resetForm(form?: NgForm)
  // {
  //   if(form != null)
  //     form.resetForm();
  //   this.service.tafettaFormData = {
  //     Id: 0,
  //     BuyerId: null,
  //     FabricId: null,
  //     ColorId: null,
  //     FinishType: '',
  //     CuttableId:null,
  //     GSMId: null,
  //     CurrentPrice: '',
  //     TermOfPrice: '',
  //     FOBSHANGHAI1: '',
  //     CNFCTG1: '',
  //     FOBSHANGHAI2: '',
  //     CNFCTG2: '',
  //     CNFCTG3: '',
  //     CNFCTG4: '',
  //     RemarksGSM: '',
  //     ExFty: '',
  //     CNFCTG5: '',
  //     COMMENTS1: '',
  //     CNFCTG6: '',
  //     CNFCTG7: '',
  //     COMMENTS2: '',
  //     CNFCTG8: '',
  //     CNFCTG9: '',
  //     FOB: '',
  //     CNFCTG10: '',
  //     CNFCTG11: '',
  //     SupplierId: null,
  //     SupplierOriginId: null,
  //     YearlyConsumeInYds: '',
  //     PriceInAverage: '',
  //     BDRepresentativeContact: '',
  //     SupplierType: '',
  //     Remarks: ''
  //   }
  // }
  
  dataSource;
  displayedColumns: string[] = ['BuyerName', 'FabricType', 'ColorName', 'FinishType', 'CuttableWidth', 'GSMValue', 'CurrentPrice'];

  onSubmit(form: NgForm) {
    if(this.service.tafettaFormData.Id != 0)
    {
      this.filterRecord(form);
    }
    else
    {
      this.updateTafetta(form);
    }
  }
  filterRecord(form: NgForm) {
    this.service.postTafettaFilter().subscribe(
      res => {
        this.dataSource = new MatTableDataSource(res);
        // SORT
        this.dataSource.sort = this.sort;
        //PAGINATOR
        this.dataSource.paginator = this.paginator;
        this.toastr.showSucces("Data Filtered Successfully");
        console.log("lll");
      },
      err => {
        this.toastr.showError("Filter Error");
      }
    )
  }

  updateTafetta(form: NgForm) {
    this.service.putTafetta().subscribe(
      res => {
        this.service.refreshTafettaList();
        this.toastr.showInfo("Data Updated");
      },
      err => {
        console.log(err);
        this.toastr.showError("Not updated yet")
      }
    )
   }

   
  // SEARCH
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //CELL CLICK AND BIND DATA INTO FORM
  populateForm(tafetta: TafettaModel) {
    this.service.tafettaFormData = Object.assign({}, tafetta);
  }

}
