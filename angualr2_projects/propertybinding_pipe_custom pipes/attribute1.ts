
import {Component} from "@angular/core";
@Component({
  selector:'attr-comp',
  styles:[`
.present{
color:darkgreen;
}
.notpresent{
color: red;
}
`],
  template:`<h2>attribute directive example</h2>
<div [ngClass]="{present:isPresent,notpresent:!isPresent}">ngClass Example</div>
<div [ngStyle]="{'color':'red','font-size':'20','background-color':'lightgreen'}">ngStyle example</div>`
})
export class attribute1{
isPresent=true;
}

