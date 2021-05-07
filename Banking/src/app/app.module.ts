import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'

import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { SearchAccountComponent } from './search-account/search-account.component';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { AboutUsComponent } from './about-us/about-us.component';



const routes: Routes = [
  { path: '', component: SideNavComponent },
  { path: 'createaccount', component: CreateAccountComponent },
  { path: 'updateaccount', component: UpdateAccountComponent },
  { path: 'searchaccount', component: SearchAccountComponent },
  { path: 'customersearch', component: CustomerSearchComponent },
  { path: 'customerupdate', component: CustomerUpdateComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'withdraw', component: WithdrawComponent }


];




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    CreateAccountComponent,
    UpdateAccountComponent,
    SearchAccountComponent,
    EmployeeComponent,
    CustomerSearchComponent,
    CustomerUpdateComponent,
    DepositComponent,
    WithdrawComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
