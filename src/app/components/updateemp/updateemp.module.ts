import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateempRoutingModule } from './updateemp-routing.module';
import { UpdateempComponent } from './updateemp.component';


@NgModule({
  declarations: [UpdateempComponent],
  imports: [
    CommonModule,
    UpdateempRoutingModule
  ]
})
export class UpdateempModule { }
