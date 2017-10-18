/* Router Example
1) create product.ts component and customer.ts component
 2) add these 2 in module.ts using import statement and in declaration section.
 3) add  <base href="/"> inside index.html
 4) add import {RouterModule} from '@angular/router'; this to app.module.ts
 5) add
 RouterModule.forRoot([
 {path:'product',component:product},
 {path:'customer',component:customer}

 ])

 the above code in app.module.ts inside imports section.

 6) add

 <h1>Routing works.....</h1>
 <nav>
 <a routerLink="/product">Products</a>
 <a routerLink="/customer">Customer</a>
 </nav>
 <router-outlet></router-outlet>

 the above code into app.component.ts*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {product} from './product';
import {customer} from './customer';
import {Productdetails} from './Productdetails';
import {PageNotFound} from './PageNotFound';
import {Home} from "./Home";

@NgModule({
  declarations: [
    AppComponent,product,customer,Productdetails,PageNotFound,Home
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'',component:Home},
      {path:'product',component:product},
      {path:'customer',component:customer},
      {path:'product/:name/:id',component:Productdetails},
      {path:'**',component:PageNotFound}

    ])
  ],

  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
