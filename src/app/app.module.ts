import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { CompanyComponent } from './company/company.component';
import { DemoService } from './services/demo.service';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { NavComponent } from './navigation/components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
// import { DashboardComponent } from './navigation/components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
// toastr
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SupplierDetailsComponent } from './setting/supplier-details/supplier-details.component';
import { SupplierDetailComponent } from './setting/supplier-details/supplier-detail/supplier-detail.component';
import { SupplierDetailListComponent } from './setting/supplier-details/supplier-detail-list/supplier-detail-list.component';
import {MatTableModule} from '@angular/material/table';
import { ZipperDetailsComponent } from './setting/zipper-details/zipper-details.component';
import { ZipperDetailComponent } from './setting/zipper-details/zipper-detail/zipper-detail.component';
import { ZipperDetailListComponent } from './setting/zipper-details/zipper-detail-list/zipper-detail-list.component';
import { ShippingDetailsComponent } from './setting/shipping-details/shipping-details.component';
import { ShippingDetailComponent } from './setting/shipping-details/shipping-detail/shipping-detail.component';
import { ShippingDetailListComponent } from './setting/shipping-details/shipping-detail-list/shipping-detail-list.component';
import { FabricDetailsComponent } from './setting/fabric-details/fabric-details.component';
import { FabricDetailComponent } from './setting/fabric-details/fabric-detail/fabric-detail.component';
import { FabricDetailListComponent } from './setting/fabric-details/fabric-detail-list/fabric-detail-list.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSortModule} from '@angular/material/sort';
import { SettingService } from './services/setting/setting.service';
import { SupplierDetailService } from './services/supplier-detail.service';
import { RegistrationService } from './services/registration.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTreeModule} from '@angular/material/tree';
import { CompanyDetailsComponent } from './setting/company-details/company-details.component';
import { CompanyDetailComponent } from './setting/company-details/company-detail/company-detail.component';
import { CompanyDetailListComponent } from './setting/company-details/company-detail-list/company-detail-list.component';
import { BuyerDetailsComponent } from './setting/buyer-details/buyer-details.component';
import { BuyerDetailComponent } from './setting/buyer-details/buyer-detail/buyer-detail.component';
import { BuyerDetailListComponent } from './setting/buyer-details/buyer-detail-list/buyer-detail-list.component';
import { ColorDetailsComponent } from './setting/color-details/color-details.component';
import { ColorDetailComponent } from './setting/color-details/color-detail/color-detail.component';
import { ColorDetailListComponent } from './setting/color-details/color-detail-list/color-detail-list.component';
import { CurrencyDetailsComponent } from './setting/currency-details/currency-details.component';
import { CurrencyDetailComponent } from './setting/currency-details/currency-detail/currency-detail.component';
import { CurrencyDetailListComponent } from './setting/currency-details/currency-detail-list/currency-detail-list.component';
import { CountryDetailsComponent } from './setting/country-details/country-details.component';
import { CountryDetailComponent } from './setting/country-details/country-detail/country-detail.component';
import { CountryDetailListComponent } from './setting/country-details/country-detail-list/country-detail-list.component';
import { CuttableDetailsComponent } from './setting/cuttable-details/cuttable-details.component';
import { CuttableDetailComponent } from './setting/cuttable-details/cuttable-detail/cuttable-detail.component';
import { CuttableDetailListComponent } from './setting/cuttable-details/cuttable-detail-list/cuttable-detail-list.component';
import { GsmDetailsComponent } from './setting/gsm-details/gsm-details.component';
import { GsmDetailComponent } from './setting/gsm-details/gsm-detail/gsm-detail.component';
import { GsmDetailListComponent } from './setting/gsm-details/gsm-detail-list/gsm-detail-list.component';
import { TafettaDetailsComponent } from './input/tafetta-details/tafetta-details.component';
import { TafettaDetailComponent } from './input/tafetta-details/tafetta-detail/tafetta-detail.component';
import { TafettaDetailListComponent } from './input/tafetta-details/tafetta-detail-list/tafetta-detail-list.component';
import {MatSelectModule} from '@angular/material/select';
import { ExpressDetailsComponent } from './setting/express-details/express-details.component';
import { ExpressDetailComponent } from './setting/express-details/express-detail/express-detail.component';
import { ExpressDetailListComponent } from './setting/express-details/express-detail-list/express-detail-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    PageNotFoundComponent,
    SupplierDetailsComponent,
    SupplierDetailComponent,
    SupplierDetailListComponent,
    ZipperDetailsComponent,
    ZipperDetailComponent,
    ZipperDetailListComponent,
    ShippingDetailsComponent,
    ShippingDetailComponent,
    ShippingDetailListComponent,
    FabricDetailsComponent,
    FabricDetailComponent,
    FabricDetailListComponent,
    UserComponent,
    LoginComponent,
    RegistrationComponent,
    CompanyDetailsComponent,
    CompanyDetailComponent,
    CompanyDetailListComponent,
    BuyerDetailsComponent,
    BuyerDetailComponent,
    BuyerDetailListComponent,
    ColorDetailsComponent,
    ColorDetailComponent,
    ColorDetailListComponent,
    CurrencyDetailsComponent,
    CurrencyDetailComponent,
    CurrencyDetailListComponent,
    CountryDetailsComponent,
    CountryDetailComponent,
    CountryDetailListComponent,
    CuttableDetailsComponent,
    CuttableDetailComponent,
    CuttableDetailListComponent,
    GsmDetailsComponent,
    GsmDetailComponent,
    GsmDetailListComponent,
    TafettaDetailsComponent,
    TafettaDetailComponent,
    TafettaDetailListComponent,
    ExpressDetailsComponent,
    ExpressDetailComponent,
    ExpressDetailListComponent,
    // NavComponent,
    // DashboardComponent
  ],
  imports: [
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    ToastrModule.forRoot(),
    MatTableModule,
    MatTabsModule,
    MatSortModule,
    MatPaginatorModule,
    MatTreeModule,
    MatSelectModule,
  ],
  providers: [
    DemoService,
    SettingService,
    SupplierDetailService,
    RegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
