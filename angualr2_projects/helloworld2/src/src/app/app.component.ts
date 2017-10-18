import { Component } from '@angular/core';
import {customer} from './customer';

@Component({
  selector: 'app-root',
  template: `<h2>Customer info</h2>
<label>Enter Customer name here</label>
<input type="text" #cname (keyup)="0">
<cust-comp [custname_parent]="cname.value"></cust-comp>`,


})
export class AppComponent {
  title = 'app works!';
}
