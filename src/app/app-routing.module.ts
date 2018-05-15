import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ManagementTariffComponent } from './management-tariff/management-tariff.component';
import { HistoryComponent } from './history/history.component';
import { ManagementAddressComponent } from './management-address/management-address.component';

const routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'management', component: ManagementTariffComponent},
  {path: 'history', component:     HistoryComponent},
  {path: 'address', component: ManagementAddressComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
