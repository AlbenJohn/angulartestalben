import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesComponent } from './companies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HalfmodalModule } from '../halfmodal';
import { AngularSlickgridModule } from 'angular-slickgrid';


@NgModule({
  declarations: [CompaniesComponent],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    ReactiveFormsModule,FormsModule,HalfmodalModule,AngularSlickgridModule
  ]
})
export class CompaniesModule { }
