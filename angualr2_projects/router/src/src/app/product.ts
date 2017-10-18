
import { Component } from '@angular/core';
import {Router} from "@angular/router";



@Component({
  selector: 'product-comp',
  template: `<h1>Product details</h1>
              <table (click)="onSelectId(p)" *ngFor="let p of products" border="3">
              <tr>
              <td>{{p.id}}</td><td>{{p.name}}</td>
</tr>
</table>`
})
export class product{
  constructor(private router:Router){}
products=[
  {"id":1001,"name":"Laptop"},
  {"id":1002,"name":"Fridge"},
  {"id":1003,"name":"Mobile"},
  ]
  onSelectId(p){
    this.router.navigate(['/product',p.name,p.id]);
  }

}

