import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companyList
  constructor(private service: DemoService) { }

  ngOnInit(): void {
    this.service.getAllCompany().subscribe(companyList => {this.companyList = companyList});
  }

}
