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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
{path:'', component:SideNavComponent},
  {path:'createaccount', component:CreateAccountComponent},
  {path:'updateaccount', component:UpdateAccountComponent},
  {path:'searchaccount', component:SearchAccountComponent},
  {path:'customersearch',component:CustomerSearchComponent},
  {path:'customerupdate', component:CustomerUpdateComponent}

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
    CustomerUpdateComponent
  ],
  imports: [
    BrowserModule, FormsModule,HttpClientModule,RouterModule.forRoot(routes), BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
