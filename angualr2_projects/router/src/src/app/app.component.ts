import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `<h1>Routing works
    </h1> 
<nav>
<ul class="nav nav-pills">
  <li role="presentation" ><a routerLink="/product">Products</a></li>
<li><a routerLink="/customer">Customer</a></li></ul>

</nav>
<router-outlet></router-outlet>`
 })
export class AppComponent {
  title = 'app works!';

}
