/*
* 1)import reactiveformmodule in module.ts and mention in imports section.
* 2) create model code in component.ts using formgroup and formcontrol.
* 3) in component.html create form with 4 fields name,age,phone and city
* 4) bind the form tag with [formGroup]="customerForm"
* 5) add formControlName to each textbox.
* */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule

  ],

  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
