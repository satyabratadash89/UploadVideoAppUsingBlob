/*
1) create customername.ts import it to module.ts
2) create customerdetails.ts import it to module.ts
3) ensure httpmodule is imported and included in imports section.
 4) goto customerservice create private http varriable.
 in the constructor to indicate constructor injection.
 5) import {http} inside customerservice to some coding this file
 6) goto customername component write the code
7) ensure in json file only data should be there,if anything extra code
 is present in json then its a error*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {customername} from './customername';
import {customerdetails} from './customerdetails';

@NgModule({
  declarations: [
    AppComponent,customername,customerdetails
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
