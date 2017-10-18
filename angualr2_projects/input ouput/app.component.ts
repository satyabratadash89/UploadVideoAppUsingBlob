import { Component } from '@angular/core';
import {customer} from './customer';

@Component({
  selector: 'app-root',
  template: `<h2>Customer info...</h2>
<label>Enter Customer name here</label>
<input type="text" #cname (keyup)="0">{{childData}}
<cust-comp (childEvent)="childData=$event"[custname_parent]="cname.value"></cust-comp>
  `,


})
export class AppComponent {
  title = 'Hello World.....';
  public childData:string;
}
