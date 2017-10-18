
import {Component} from "@angular/core";
@Component({
  selector:'pipe-comp',
  template:`<h2>PIPEs example</h2>
<h3>{{name |lowercase}}</h3>
<h3>{{name |uppercase}}</h3>
<h3>{{2 | percent}}</h3>
<h3>{{name |slice:0:3}}</h3>`
})
export class pipedemo{
name:string="Gouri ms";
}


