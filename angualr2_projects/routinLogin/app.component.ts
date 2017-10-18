import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Home page</h1>
  <a routerLink="/login">Login Form</a>
  <router-outlet></router-outlet>`

})


export class AppComponent {
  title = 'app works!';
}
