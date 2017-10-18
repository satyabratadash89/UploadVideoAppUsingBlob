import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Logincomponent} from './Logincomponent';
import {RouterModule} from '@angular/router';
import {admincomponent} from './admincomponent';
import {student} from './student';

@NgModule({
  declarations: [
    AppComponent, Logincomponent, admincomponent,student
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
      path: 'login', component: Logincomponent},
      {path: 'admincomponent',
        children:[{path:'',component: admincomponent},
        {path:'student',component: student}]
        },

      ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
