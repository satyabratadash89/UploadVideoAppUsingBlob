
import {Component} from "@angular/core";

@Component({
  selector: 'attr-dir',
  styles:[`
  .present{
  color:green;
  }
    .notpresent{
    color:red;
    }
  `],
  template: `
<div [ngClass]="{present:isPresent,notpresent:!isPresent}">
  ngClass Example</div>
<div [ngStyle]=
       "{'color':'red','font-size':'20',
       'background-color':'lightgreen'}">
ngstyle Example for inline styling</div>`

})
export class attributedir{

isPresent=true;
}



