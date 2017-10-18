
import {Directive,ElementRef} from "@angular/core";

@Directive({
  selector: '[change-color]'
})
export class customdir{

  constructor(el:ElementRef){
    el.nativeElement.style.background='darkviolet';
    el.nativeElement.style.color='yellow'
  }

}
/*
note: import is not added in app.component.ts but just added in app.module.ts
 */



