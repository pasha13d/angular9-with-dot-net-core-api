import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TafettaDetailListComponent } from '../input/tafetta-details/tafetta-detail-list/tafetta-detail-list.component';
import { TafettaDetailsComponent } from '../input/tafetta-details/tafetta-details.component';
import { DashboardComponent } from '../navigation/components/dashboard/dashboard.component';
import { NavComponent } from '../navigation/components/nav/nav.component';
import { BuyerDetailsComponent } from '../setting/buyer-details/buyer-details.component';
import { ColorDetailsComponent } from '../setting/color-details/color-details.component';
import { CompanyDetailsComponent } from '../setting/company-details/company-details.component';
import { CountryDetailsComponent } from '../setting/country-details/country-details.component';
import { CurrencyDetailsComponent } from '../setting/currency-details/currency-details.component';
import { CuttableDetailsComponent } from '../setting/cuttable-details/cuttable-details.component';
import { ExpressDetailsComponent } from '../setting/express-details/express-details.component';
import { FabricDetailsComponent } from '../setting/fabric-details/fabric-details.component';
import { GsmDetailsComponent } from '../setting/gsm-details/gsm-details.component';
import { ShippingDetailsComponent } from '../setting/shipping-details/shipping-details.component';
import { SupplierDetailsComponent } from '../setting/supplier-details/supplier-details.component';
import { ZipperDetailsComponent } from '../setting/zipper-details/zipper-details.component';


const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'supplier-details',
        component: SupplierDetailsComponent
      },
      {
        path: 'zipper-details',
        component: ZipperDetailsComponent
      },
      {
        path: 'shipping-details',
        component: ShippingDetailsComponent
      },
      {
        path: 'fabric-details',
        component: FabricDetailsComponent
      },
      {
        path: 'company-details',
        component: CompanyDetailsComponent
      },
      {
        path: 'buyer-details',
        component: BuyerDetailsComponent
      },
      {
        path: 'color-details',
        component: ColorDetailsComponent
      },
      {
        path: 'country-details',
        component: CountryDetailsComponent
      },
      {
        path: 'currency-details',
        component: CurrencyDetailsComponent
      },
      {
        path: 'cuttable-details',
        component: CuttableDetailsComponent
      },
      {
        path: 'gsm-details',
        component: GsmDetailsComponent
      },
      {
        path: 'express-details',
        component: ExpressDetailsComponent
      },
      {
        path: 'tafetta-details',
        component: TafettaDetailsComponent
      },
      {
        path: 'tafetta-detail-list',
        component: TafettaDetailListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
