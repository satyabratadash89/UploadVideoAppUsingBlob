import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';



  sumofnumber(num1:number,num2:number):number{
    return(num1+num2);
  }

  subofnumber(num1,num2:number):number{
    return(num1-num2);
  }

}
