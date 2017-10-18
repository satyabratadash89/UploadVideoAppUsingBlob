import {Component} from '@angular/core';

@Component({
  selector:'pipes-comp',
  template:`<h3>{{myname | uppercase}}</h3>
<h3>{{myname | lowercase}}</h3>
<h3>{{214234 | number}}</h3>
<h3>{{2 | percent}}</h3>
<h3>{{myname | slice:0:4}}</h3>
<h3>{{myname | slice:0:4 | uppercase}}</h3>`
})

export class pipedemo{
  myname="Gouri Ms";
  dob="27/04/05";
}
