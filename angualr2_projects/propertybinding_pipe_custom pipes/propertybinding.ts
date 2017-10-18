import {Component} from "@angular/core";
@Component({
  selector:'prop-comp',
  template:`<h2>Image display using property binding</h2>
<img [src]="imagesrc"><br>
<button (click)="hello()">click here</button><br>
your organization name is : {{organme}}
<input type="text" [(ngModel)]="organme"/> `
})
export class propertybinding{
  organme:string="Accenture";
  imagesrc="./assets/images1.png";
  hello(){
    console.log("called from temaplte");
  }
}
