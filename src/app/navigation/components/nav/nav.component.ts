import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
// import {FlatTreeControl} from '@angular/cdk/tree';
// import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

// //TREE dor navbar dropdown
// interface NavDropDown {
//   name: string;
//   children?: NavDropDown[];
// }

// const dropDownData: NavDropDown[] = [
//   {
//     name: 'Setting',
//     children: [
//       {name: 'Fabric'},
//       {name: 'Shipping'},
//       {name: 'Supplier'},
//       {name: 'Zipper'},
//     ]
//   }
// ];

// interface NavDropDownModel {
//   expandable: boolean;
//   name: string;
//   level: number;
// }

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  panelOpenState = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
