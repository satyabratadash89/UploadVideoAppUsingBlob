import {Component} from "@angular/core";

@Component({
  selector:'parent-comp',
  template:`<div class="maincontent">
    here is the main parent container
<child-comp></child-comp>
</div>`,
  styles:[`
.maincontent{
background-color: cadetblue;
font-size: larger;
padding: 25px;
width: 400px;
}`]
 })
export class parentcomponent{

}

