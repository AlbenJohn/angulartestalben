import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HalfmodalComponent} from './halfmodal.component'

@NgModule({
  declarations: [HalfmodalComponent],
  imports: [
    CommonModule
  ],
  exports:[HalfmodalComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HalfmodalModule { }
