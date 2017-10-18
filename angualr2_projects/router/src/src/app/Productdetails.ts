

import { Component,OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


@Component({

  template: `<h1>The selected Product ID is ={{p_name}} {{p_id}}</h1>

  <button (click)="gotoLogin()" class="btn btn-primary">GoBack</button>
  `
})
export class Productdetails implements OnInit{
  public p_name;
  public p_id;
  constructor(private route:ActivatedRoute,private router:Router){}
  ngOnInit(){
    let name=this.route.snapshot.params['name'];
    this.p_name=name;
    let id=this.route.snapshot.params['id'];
    this.p_id=id;
  }
    gotoLogin(){
    this.router.navigate(['/product']);
  }
}

