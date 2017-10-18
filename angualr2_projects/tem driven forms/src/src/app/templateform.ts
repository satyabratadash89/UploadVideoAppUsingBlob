
import { Component } from '@angular/core';



@Component({
  selector: 'template-comp',
  templateUrl: './app.component.html'
})
export class templateform{
  onSubmit(value:any){
    console.log(value);
    console.log('hello');
  }
 }



