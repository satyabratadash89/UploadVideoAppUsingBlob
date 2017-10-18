import { Component } from '@angular/core';

import {templateform} from './templateform';

@Component({
  selector: 'app-root',
  template: `<h1>Routing works</h1> 

<nav>
<a routerLink="/product">Products</a>
<a routerLink="/customer">Customer</a>
<a routerLink="/c">template</a>
</nav>
<router-outlet></router-outlet>`
 })
export class AppComponent {
  title = 'app works!';

}
