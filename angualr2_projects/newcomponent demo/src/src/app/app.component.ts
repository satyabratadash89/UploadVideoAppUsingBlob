import { Component } from '@angular/core';
import {usercomponent} from './usercomponent';
import {productcomponent} from './productcomponent';
import {parentcomponent} from './parentcomponent';
import {childcomponent} from './childcomponent';
import {interpolationcomponent} from './interpolationcomponent';
import {proprtybindingcomponent} from './proprtybindingcomponent';
import {eventbinding} from './eventbinding';
import {twowaybinding} from './twowaybinding';
import {structdirective} from './structdirective';
import {attributedir} from './attributedir';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
