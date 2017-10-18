
import { Component,OnInit } from '@angular/core';
import {customerservice} from "./customerservice";


@Component({
  selector: 'cust-det',
  template: `<h1>customer details</h1>
<ul *ngFor="let customer of customers">
  <li>{{customer.id}} {{customer.title}}</li>
</ul>`
})
export class customerdetails implements OnInit{
  customers=[];


  constructor(private customerser:customerservice){

  }
  ngOnInit(){
    this.customerser.getCustomers()//getcustomers returns observable
      .subscribe(resCustomerData=>this.customers=resCustomerData);
    //observable dont send data untill we subscribe it
    //customerservice will not send data to customername untill
    //we subscribe it to them

  }
}

