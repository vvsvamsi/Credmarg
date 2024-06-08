import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { VendorManagementComponent } from './vendor-management/vendor-management.component';
import { EmailManagementComponent } from './email-management/email-management.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    EmployeeManagementComponent,
    VendorManagementComponent,
    EmailManagementComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
 
  ],
  bootstrap: [AppComponent],
  
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

})
export class AppModule { }
