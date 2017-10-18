import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})
export class AppComponent {
  title = 'app works!';

  calculate(num){
    if(num<0){
      return 0;
    }
    else{
      return 1;
    }
  }
  sumofnumber(num1:number,num2:number):number{
    return(num1+num2);
  }


}
