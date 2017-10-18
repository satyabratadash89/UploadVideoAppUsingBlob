
import {Component} from "@angular/core";

@Component({
  selector: 'interpolation-comp',

  template: `<h1> This is created by {{name}}</h1>
<p>{{displayHello()}}</p>`

})
export class interpolationcomponent{
name="ms";
displayHello(){
  return "Hello from displayHello function";
}
}
/*we can also write above function in this format to indicate function returns
string value

  displayHello():string{
 return "Hello from displayHello function";
 }
 */

