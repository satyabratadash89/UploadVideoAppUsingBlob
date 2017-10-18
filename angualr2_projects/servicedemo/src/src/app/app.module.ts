/*in this module i added CUSTOM_ELEMENTS_SCHEMA in the import at starting also
* and added it below also scroll down to see schemas.
points to remember.
1)create service customerservice
2)register this service in app.component.ts using providers and import statement.
3) to use this service created new component customername.ts and imported service
in this component.
4) add this new customername.ts component in app.module.ts in
its import and delclaration section
* */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {customername} from './customername';
import {customerdetails} from './customerdetails';



@NgModule({
  declarations: [
    AppComponent,
    customername,
    customerdetails

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],

  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
