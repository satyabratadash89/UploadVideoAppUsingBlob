
import {Directive, ElementRef} from "@angular/core";
@Directive({
  selector:'[cust-comp]'
})
export class customdir{

  constructor(el:ElementRef){
    el.nativeElement.style.background='darkviolet';
  }
}


