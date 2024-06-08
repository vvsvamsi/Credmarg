import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { VendorManagementComponent } from './vendor-management/vendor-management.component';
import { EmailManagementComponent } from './email-management/email-management.component';


const routes: Routes = [
  { path: '', component: AdminDashboardComponent },
  { path: 'employees', component: EmployeeManagementComponent },
  { path: 'vendors', component: VendorManagementComponent },
  { path: 'emails', component: EmailManagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



 
