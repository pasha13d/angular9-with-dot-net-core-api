import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MyErrorStateMatcher } from 'src/app/default.error-matcher';
import { TafettaExpressModel, TafettaModel } from 'src/app/models/setting/setting.model';
import { NotificationService } from 'src/app/services/notification.service';
import { SettingService } from 'src/app/services/setting/setting.service';
import {map, filter} from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'tafetta-detail',
  templateUrl: './tafetta-detail.component.html',
  styleUrls: ['./tafetta-detail.component.css']
})
export class TafettaDetailComponent implements OnInit {
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
  supplierList;
  expressList;

  dataTable= [];
  dataShow= [];
  dShow = []

  // public sumFob=0;
  public sumCNFCTG=0; 
  public sumExFTy=0;   
  private value;

  matcher = new MyErrorStateMatcher();
  
  
  
  constructor(public service: SettingService, private toastr: NotificationService, private http: HttpClient) { }
  readonly rootURL = 'http://localhost:2900/api/Tafetta';
  ngOnInit(): void {
    this.dataTable;
    this.resetForm();
    // this.service.getTafettaDetails();
    // this.service.refreshTafettaList();
    console.log("ddl");
    //DDL
    //Buyer
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
    //Express
    this.service.getAllExpressList().subscribe(expressList=> {this.expressList = expressList});

  }

  resetForm(form?: NgForm)
  {
    if(form != null)
      form.resetForm();
    this.service.tafettaFormData = {
      Id: 0,
      BuyerId: null,
      FabricId: null,
      ColorId: null,
      FinishType: '',
      CuttableId:null,
      GSMId: null,
      CurrentPrice: '',
      TermOfPrice: '',
      FOBSHANGHAI1: '',
      CNFCTG1: '',
      RemarksGSM: '',
      ExFty: '',
      COMMENTS1: '',
      SupplierId: null,
      SupplierOriginId: null,
      YearlyConsumeInYds: '',
      PriceInAverage: '',
      BDRepresentativeContact: '',
      SupplierType: '',
      Remarks: '',
      ExpressId: null
    }
  }

  
  // onSubmit(form: NgForm) {
  //   if(this.service.tafettaFormData.Id ==0)
  //   {
  //     this.insertRecord(form);
  //   }
  //   else
  //   {
  //     this.updateRecord(form);
  //   }
  // }
  
 

  updateRecord(form: NgForm) {
    this.service.putTafetta().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshTafettaList();
        this.toastr.showInfo("Data Updated");
      },
      err => {
        console.log(err);
        this.toastr.showError("Not updated yet")
      }
    )
   }
  AddData(x) {
    // console.log("X", x);
    this.dataTable.push({
      Id: this.dataTable.length+1,
      ExpressId: x.ExpressId,
      // ExpressName: this.service.tafettaFormData.filter(v=>v.Id==x.ExpressId)[0].ExpressName,
      // ExpressName: this.service.tafettaFormData.filter(v=>v.Id ==x.ExpressId)[0].ExpressName,
      FOBSHANGHAI1: x.FOBSHANGHAI1,
      CNFCTG1: x.CNFCTG1,
      ExFty: x.ExFty
    });
    console.log("data", this.dataTable);
    console.log("left", x);
  }
  

  // ************   TABLE COLUMN WISE SUM  *************
  get totalFob(){
    this.value = this.dataTable;
    var sumFob = 0;
    for(let j=0; j<this.dataTable.length; j++){  
      sumFob+= parseFloat(this.value[j].FOBSHANGHAI1);
      }
      return sumFob;
  }

  get totalCNFCTG(){
    this.value = this.dataTable;
    var sumCNFCTG = 0;
    for(let j=0; j<this.dataTable.length; j++){  
      sumCNFCTG+= parseFloat(this.value[j].CNFCTG1);
      }
      return sumCNFCTG;
  }

  get totalExFty(){
    this.value = this.dataTable;
    var sumExFty = 0;
    for(let j=0; j<this.dataTable.length; j++){  
      sumExFty+= parseFloat(this.value[j].ExFty);
      }
      return sumExFty;
  }
// *****************    OVER SUM *****************
// ************ REMOVE DATA FROM TABLE ROW  *************
  removeData(i: number) {
    this.dataTable.splice(i, 1)
  }

  //Form Submit
  AddFabric(x) {
    var dList = [];
    for(let i=0; i<this.dataTable.length; i++)
    {
      dList.push({
        Id: i,
        ExpressId: this.dataTable[i].ExpressId,
        FOBSHANGHAI1: this.dataTable[i].FOBSHANGHAI1,
        CNFCTG1: this.dataTable[i].CNFCTG1,
        ExFty: this.dataTable[i].ExFty
      });
    }
    this.dataShow.push({
      BuyerId: x.BuyerId,
      FabricId: x.FaFabricId,
      ColorId: x.ColorId,
      FinishType: x.FinishType,
      CuttableId: x.CuttableId,
      GSMId: x.GSMId,
      CurrentPrice: x.CurrentPrice,
      TermOfPrice: x.TermOfPrice,
      SupplierId: x.SupplierId,
      SupplierOriginId: x.SupplierOriginId,
      YearlyConsumeInYds: x.YearlyConsumeInYds,
      PriceInAverage: x.PriceInAverage,
      BDRepresentativeContact: x.BDRepresentativeContact,
      SupplierType: x.SupplierType,
      Remarks: x.Remarks,
      RemarksGSM: x.RemarksGSM,
      COMMENTS1: x.COMMENTS1,
      ExpressList: dList,
    });
    // this.dataTable= [];
    console.log("Data's", this.dataShow);
    this.dataSource = new MatTableDataSource(this.dataShow);
    // SORT
    this.dataSource.sort = this.sort;
    //PAGINATOR
    this.dataSource.paginator = this.paginator;
  }
  dataSource;
  displayedColumns: string[] = ['BuyerId', 'FabricId', 'ColorId', 'FinishType', 'CuttableId', 'GSMId', 'CurrentPrice', 'TermOfPrice',
                                'SupplierId','SupplierOriginId', 'YearlyConsumeInYds', 'PriceInAverage', 'BDRepresentativeContact', 
                                'SupplierType', 'Remarks', 'RemarksGSM', 'COMMENTS1', 'ExpressDetails'];
                                
  applyFilter(filterValue: string) {
   this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSubmit() {
    console.log("all", this.dataShow);
    // this.insertRecord(this.dataShow);
    // this.http.post(this.rootURL, this.dataShow).toPromise().then(data => {
    //   console.log("OK", data);
    // })

    this.http.post(this.rootURL, this.dataShow).subscribe(
      res => {
        console.log("yo", this.dataShow);
      }
    )
  }

  insertRecord(dataShow) {
    this.service.postTafetta().subscribe(
      res => {
        this.resetForm(dataShow);
        console.log("INSERT", dataShow);
        this.toastr.showSucces("Saved Successfully");
        console.log("lll");
      },
      err => {
        this.toastr.showError("Data can't save");
      }
    )
  }

  // change($event)
  // onChange(val: any) {
  //   console.log("GGG", val.ExpressName);
  // }

}
