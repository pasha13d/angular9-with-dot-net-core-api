import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fabric-details',
  templateUrl: './fabric-details.component.html',
  styles: []
})
export class FabricDetailsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url);
  }

}
