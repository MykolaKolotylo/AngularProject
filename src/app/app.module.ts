import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { ModalModule } from 'ngx-bootstrap/modal';


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
import { MonthPipe } from './pipes/monthPipe';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ManagementTariffComponent,
    FixedPriceComponent,
    VariablePriceComponent,
    ManagementAddressComponent,
    HistoryPaymentComponent,
    MonthPipe
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
