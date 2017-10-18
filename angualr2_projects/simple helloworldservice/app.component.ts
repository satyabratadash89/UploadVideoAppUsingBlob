import { Component } from '@angular/core';
import {HelloService} from './HelloService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HelloService]
})
export class AppComponent {
  title = 'app works!';
  name= '';
  constructor(private hs: HelloService) {

  }
  onRequest(name: string) {
  this.hs.sayHello(name);
  }

}
