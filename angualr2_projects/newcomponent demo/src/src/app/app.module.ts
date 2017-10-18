import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {usercomponent} from './usercomponent';
import {productcomponent} from './productcomponent';
import {parentcomponent} from './parentcomponent';
import {childcomponent} from './childcomponent';
import {interpolationcomponent} from './interpolationcomponent';
import {proprtybindingcomponent} from './proprtybindingcomponent';
import {eventbinding} from './eventbinding';
import {twowaybinding} from './twowaybinding';
import {structdirective} from './structdirective';
import {attributedir} from './attributedir';
import {customdir} from './customdir';
import {pipedemo} from './pipedemo';
import {custompipedemo} from './custompipedemo';
import {demo} from './demo';
import {struct_dir_demo} from './struct_dir_demo';
import {custompipe_demo} from './custompipe_demo';




@NgModule({
  declarations: [
    AppComponent,
    usercomponent,
    productcomponent,
    parentcomponent,
    childcomponent,
    interpolationcomponent,
    proprtybindingcomponent,
    eventbinding,
    twowaybinding,
    structdirective,
    attributedir,
    customdir,
    pipedemo,
    custompipedemo,
    demo,
    struct_dir_demo,
    custompipe_demo



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
