

import {Component} from "@angular/core";
@Component({
  selector:'app-demo',
  template:`
you types content here {{myname9}}
<input type="text" [(ngModel)]="myname9"/>`
})

export class demo{
  myname9:string="hello all";
}
