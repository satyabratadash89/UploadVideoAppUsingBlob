
import { Component } from '@angular/core';



@Component({
  selector: 'product-comp',
  template: `<h1>Product details</h1>
              <table *ngFor="let p of products" border="3">
              <tr>
              <td>{{p.id}}</td><td>{{p.name}}</td>
</tr>
</table>`
})
export class product{

products=[
  {"id":1001,"name":"Laptop"},
  {"id":1002,"name":"Fridge"},
  ]


}

