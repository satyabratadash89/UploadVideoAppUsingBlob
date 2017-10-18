import {Component} from "@angular/core";
@Component({
  selector:'child-comp',
  template:`
<div class="childcontent">Here is the child component</div>`,

  styles:[`
.childcontent{
background-color: dodgerblue;
font-size: small;
padding: 25px;
width: : 300px;
}
`]
})
export class childcomponent{

}

