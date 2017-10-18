
import {Component} from "@angular/core";

@Component({
  selector: 'struct1-dir',
  template: `<div *ngIf="isDisplay">Div section here</div>
<div>Customer Data here
<div *ngFor="let cust of customers">Name: {{cust.name}}
  Age: {{cust.age}}</div>
</div>`

})
export class structdirective{
  isDisplay=true;

  customers=[
    {name:'Meena',age:20},
    {name:'Suraj',age:23},
    {name:'Resh',age:24},
    ]
}


