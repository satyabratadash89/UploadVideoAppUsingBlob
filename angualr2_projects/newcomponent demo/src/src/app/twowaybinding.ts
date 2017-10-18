
import {Component} from "@angular/core";

@Component({
  selector: 'twoway-bind',
  template: `<input type="text" [(ngModel)]="custname"/><br>
    <p>Your name is {{custname}}</p>`

})
export class twowaybinding{
  custname:string;
}

