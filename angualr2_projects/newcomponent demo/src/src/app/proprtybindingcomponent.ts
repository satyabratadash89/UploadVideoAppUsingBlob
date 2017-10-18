import {Component} from "@angular/core";
@Component({
  selector:'property-binding',
  template:`<h2>Image display using property binding </h2>
<img [src]="imagesrc"/>`
})
export class proprtybindingcomponent{
  imagesrc="./assets/images1.png";
}
/*
in order to make this file work i added
 import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
 the above code in app.module.ts, then i got output. the reason is
 With the new angular 2.0.0 final
 release (sept 14, 2016), if you use custom html
 tags then it will report that Template parse errors.
 A custom tag is a tag you use in your HTML that’s not one of standard HTML tags.
*/
