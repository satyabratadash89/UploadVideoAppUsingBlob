import { Component } from '@angular/core';

import {customerservice} from './customerservice';

@Component({
  selector: 'app-root',
  template: `<h1>hello works</h1> 
<cust-name></cust-name>
<cust-det></cust-det>`,
  providers:[customerservice] //register the service, when it is regostered here
  // this service is accessible to all child components of app.component

})
export class AppComponent {
  title = 'app works!';
}
