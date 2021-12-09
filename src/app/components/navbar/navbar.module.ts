import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar.component"
import {FormsModule} from "@angular/forms"
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,FormsModule,TooltipModule,
    
  ],
  exports:[NavbarComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class NavbarModule { }
