
import { Component,OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';



@Component({
  selector: 'login-comp',
  template: `<h1>User Details</h1>
              <ul>
              <li (click)="onSelectName(a)"  *ngFor="let a of logindetails">
              <span>{{a.id}} {{a.name}} {{a.role}}</span>
              </li>
              </ul>`
})
export class logincomponent implements OnInit{
public selid;
  constructor(private router:Router,private route:ActivatedRoute){}

  logindetails=[
    {"id":"1","name":"Sam","role":"Administrator"},
    {"id":"2","name":"Reena","role":"Clerk"},
    {"id":"3","name":"Meena","role":"Manager"}
  ]

  onSelectName(a){
this.router.navigate(['/login',a.id]);

  }

  ngOnInit(){
    this.route.params.subscribe((params:Params)=>{
      let id=parseInt(params['id']);
      this.selid=id;
    })
  }

}



