
import { Component,OnInit } from '@angular/core';
import {customerservice} from "./customerservice";


@Component({
  selector: 'cust-det',
  template: `<h1>customer details</h1>
<ul *ngFor="let customer of customers">
<li>{{customer.id}}  {{customer.name}}  {{customer.age}}</li>
</ul>`
})
export class customerdetails implements OnInit{
  customers=[];


  constructor(private customerser:customerservice){

  }
  ngOnInit(){
    this.customers=this.customerser.getCustomers();

  }
}

