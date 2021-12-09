import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { AngularSlickgridModule } from 'angular-slickgrid';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HalfmodalModule } from '../halfmodal';
import { UpdateModule } from '../update/update.module';


@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,
    EmployeesRoutingModule,AngularSlickgridModule,BsDropdownModule,HalfmodalModule,UpdateModule
  ]
})
export class EmployeesModule { }
