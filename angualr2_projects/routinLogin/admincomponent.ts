import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'admin-app',
  template: `<h2>Admin page</h2>
  <a routerLink="/admincomponent/student">student</a>
 <router-outlet></router-outlet>`

})


export class admincomponent {

  constructor(private router:Router){}

  onStudent(){
    this.router.navigate(['/admincomponent/student']);
  }
}


