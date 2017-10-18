import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LargeComponent} from './large.component';
import { SmallComponent } from "./small.component";
import { MediumComponent } from "./medium.component";
import {RouterModule} from "@angular/router";
import { SizeComponent } from "./size.component";


@NgModule({
  declarations: [
    AppComponent, LargeComponent, MediumComponent,
    SmallComponent,SizeComponent
  ],
  imports: [
    BrowserModule,

    HttpModule,
    RouterModule.forRoot([{path: 'size', component: SizeComponent,
      children: [
        {path: '', component:SizeComponent},
        {path: 'small', component: SmallComponent},
        {path: 'medium', component: MediumComponent},
        {path: 'large', component: LargeComponent}
      ]
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
