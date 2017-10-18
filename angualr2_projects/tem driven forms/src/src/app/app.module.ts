/*
* 1) create templateform.ts component.
* 2)created app.component.html which is refered in template.ts
* 3)import the templateform.ts in module.ts and add in declaration section.
* 4) add code in app.component.html file.
* 5)created onsubmit event in templateform.ts
* */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {product} from './product';
import {customer} from './customer';
import {templateform} from './templateform';





@NgModule({
  declarations: [
    AppComponent,product,customer,templateform


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'product',component:product},
      {path:'customer',component:customer},
      {path:'c',component:templateform}

    ])
  ],

  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
