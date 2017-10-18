import { Component,OnInit } from '@angular/core';
import {customerservice} from "./customerservice";


@Component({
  selector: 'cust-name',
  template: `<h1>customer name</h1>
<ul *ngFor="let customer of customers">
<!-- 
<li>{{customer.title}}</li><!--use this if it is jsonplaceholder post url-->
  <li>{{customer.name}}</li>
</ul>
 <h3>{{errorMsg}}</h3> `
})
export class customername implements OnInit{
 customers=[];
 errorMsg:string;
  constructor(private customerser:customerservice){

  }
  ngOnInit(){
    this.customerser.getCustomers()//getcustomers returns observable
      .subscribe(resCustomerData=>this.customers=resCustomerData,
    //stop till above without error handling ensure to put ); at last
    errorcust=>this.errorMsg=errorcust);
    //observable dont send data untill we subscribe it
    //customerservice will not send data to customername untill
    //we subscribe it to them

  }
}

