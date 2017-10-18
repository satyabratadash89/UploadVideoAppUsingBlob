import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {logincomponent} from './logincomponent';
import {PageNotFound} from './PageNotFound';

import { AppComponent } from './app.component';
import {logindetails} from './logindetails';
import {Home} from './Home';

@NgModule({
  declarations: [
    AppComponent,logincomponent,logindetails,PageNotFound,Home
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'',component:Home},
      {path:'login',component:logincomponent},
      {path:'login/:id',component:logindetails},
      {path:'**',component:PageNotFound}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
