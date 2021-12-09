import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path:"",redirectTo:"components/employees",pathMatch:"full"},
  { path: 'components/employees', loadChildren: () => import('./components/employees/employees.module').then(m => m.EmployeesModule) },
   { path: 'components/companies', loadChildren: () => import('./components/companies/companies.module').then(m => m.CompaniesModule) },
  { path: 'components/updateemp', loadChildren: () => import('./components/updateemp/updateemp.module').then(m => m.UpdateempModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
