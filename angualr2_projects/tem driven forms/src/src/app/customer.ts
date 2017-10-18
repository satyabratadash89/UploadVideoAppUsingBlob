
import { Component } from '@angular/core';



@Component({
  selector: 'customer-comp',
  template: `<h1>Customer details</h1>
              <table *ngFor="let c of customers" border="3">
              <tr>
              <td>{{c.id}}</td><td>{{c.name}}</td>
</tr>
</table>`
})
export class customer{

  customers=[
    {"id":1,"name":"Sam"},
    {"id":2,"name":"Mika"},
    {"id":3,"name":"Rema"},
    {"id":4,"name":"Jack"},
    {"id":5,"name":"Gyan"}
  ]


}


