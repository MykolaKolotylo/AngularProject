import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ManagementTariffComponent } from './management-tariff/management-tariff.component';
import { FixedPriceComponent } from './home-page/fixed-price/fixed-price.component';
import { VariablePriceComponent } from './home-page/variable-price/variable-price.component';
import { AppRoutingModule } from './/app-routing.module';
import { ManagementAddressComponent } from './management-address/management-address.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mock-db';
import { HistoryPaymentComponent } from './history-payment/history-payment.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ManagementTariffComponent,
    FixedPriceComponent,
    VariablePriceComponent,
    ManagementAddressComponent,
    HistoryPaymentComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
