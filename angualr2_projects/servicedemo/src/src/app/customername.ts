import { Component,OnInit } from '@angular/core';
import {customerservice} from "./customerservice";


@Component({
  selector: 'cust-name',
  template: `<h1>customer name</h1>
<ul *ngFor="let customer of customers">
<li>{{customer.name}}</li>
</ul>`
})
export class customername implements OnInit{
 customers=[];


  constructor(private customerser:customerservice){

  }
  ngOnInit(){
    this.customers=this.customerser.getCustomers();

  }
}

