
import {Component} from "@angular/core";
@Component({
  selector:'struct-comp',
  template:`<h2>structral directive example</h2>
 <div *ngIf="isdisplay">Division section here
 <input type="text"/></div>
<h3>Customer information</h3>
<div >
<ul *ngFor="let c of customers">
<li>{{c.name}} {{c.age}}</li>
</ul>


</div>`
})
export class struct{
isdisplay=false;

customers=[
  {name:'Meena',age:23},
  {name:'Sam',age:23},
  {name:'Reena',age:23}
]
}
