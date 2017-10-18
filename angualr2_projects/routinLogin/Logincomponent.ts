import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {admincomponent} from './admincomponent';

@Component({
  selector: 'login-app',
  template: `<h2>Login page</h2>
  <form (ngSubmit)="formSubmit()">
    <div class="form-group">
      <label>Username :</label>
      <input type="text" name="uname" class="form-control" [(ngModel)]="fordata.uname"/>
    </div>

    <div class="form-group">
      <label>Password :</label>
      <input type="text" name="pass" class="form-control" [(ngModel)]="fordata.pass"/>
    </div>
    <button type="submit" class="btn-default btn">Login</button>
  </form>`

})


export class Logincomponent {
  fordata= { uname: '', pass: ''};
  constructor(private router:Router){}

  formSubmit(){
    console.log(this.fordata);

    if (this.fordata.uname === 'user1' && this.fordata.pass === 'pass1')
    {

    this.router.navigate(['/admincomponent']);


    }
    else{
      console.log("Failure");
    }
  }
}

