import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {parentcomponent} from './parentcomponent';

import { AppComponent } from './app.component';
import {childcomponent} from './childcomponent';
import {propertybinding} from './propertybinding';
import {struct} from './struct';
import {attribute1} from './attribute1';
import {customdir} from './customdir';
import {pipedemo} from './pipedemo';

@NgModule({
  declarations: [
    AppComponent,parentcomponent,childcomponent,
    propertybinding,struct,attribute1,customdir,pipedemo

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
