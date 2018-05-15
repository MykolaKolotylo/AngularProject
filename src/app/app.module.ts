import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ManagementTariffComponent } from './management-tariff/management-tariff.component';
import { HistoryComponent } from './history/history.component';
import { FixedPriceComponent } from './home-page/fixed-price/fixed-price.component';
import { VariablePriceComponent } from './home-page/variable-price/variable-price.component';
import { AppRoutingModule } from './/app-routing.module';
import { ManagementAddressComponent } from './management-address/management-address.component';
import { HistoryService } from './services/history.service';
import { AddressService } from './services/address.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mock-db';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ManagementTariffComponent,
    HistoryComponent,
    FixedPriceComponent,
    VariablePriceComponent,
    ManagementAddressComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    HistoryService,
    AddressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
