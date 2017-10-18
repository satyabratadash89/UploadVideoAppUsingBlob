import { Component } from '@angular/core';
import {customerservice} from './customerservice'

@Component({
  selector: 'app-root',
  template: `hello 
<cust-name></cust-name>
<cust-det></cust-det>`,
  providers:[customerservice]
})
export class AppComponent {
  title = 'app works!';
}
