import { Component } from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'cust-comp',
  template: `<h3>customer name</h3>
<label>This is Customer name from my parent component</label>
<input type="text" ngModel="{{custname_parent}}"/>
    <label>Customer orgname is from child component</label>
    <input type="text" #childtext (keyup)="onChange(childtext.value)">
    
`,
  inputs:['custname_parent'],
  outputs:['childEvent']

})
export class customer {
custname_parent:string;
childEvent=new EventEmitter<string>();
onChange(value:string){
  this.childEvent.emit(value);
}
}

