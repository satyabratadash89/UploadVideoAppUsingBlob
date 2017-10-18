

import { Component,OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
//the below one is for goprev() and gonext() activity
import  {Router} from '@angular/router';
@Component({

  template: `<h1>The selected users ID is ={{Id}} </h1>
              
  <!--the below part is for goprev() and gonext() -->
  <a (click)="goPrev()">Previous</a> |
  <a (click)="goNext()">Next</a>
  <p>
    <button (click)="gotoLogin()">Back</button>
  </p>`
})
export class logindetails implements OnInit {
  public Id;


  //for goprev activity ass router in constructor
  constructor(private route: ActivatedRoute, private router:Router) {  }

  /*
  ngOnInit() {
    let role = this.route.snapshot.params['id'];
    this.Id = role;
  }*/

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      let id=parseInt(params['id']);
      this.Id=id;
    })
  }
  goPrev(){

    let previd=this.Id-1;
    this.router.navigate(['/login',previd]);
  }
  goNext(){
    let nextid=this.Id+1;
    this.router.navigate(['/login',nextid]);
  }
  gotoLogin(){
    let selectedId=this.Id? this.Id:null;
    this.router.navigate(['/login',{id:selectedId}])
  }
}
