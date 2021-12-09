import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [UpdateComponent],
    imports: [
      CommonModule,FormsModule,ReactiveFormsModule
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
    exports:[UpdateComponent],
    providers:[]
  })
  export class UpdateModule { }