import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSlickgridModule } from 'angular-slickgrid';
import { HttpClientModule } from '@angular/common/http';
import { NavbarModule } from './components/navbar/navbar.module';
import { ApiServices } from './services/apiservices';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HalfmodalModule } from './components/halfmodal';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularSlickgridModule.forRoot(),
    HttpClientModule,
    NavbarModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    
  ],
  providers: [ApiServices,HalfmodalModule],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
})
export class AppModule { }
