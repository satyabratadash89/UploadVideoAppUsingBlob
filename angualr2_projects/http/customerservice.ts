//create service

import {Injectable} from '@angular/core';
import {Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from "rxjs/Observable";

@Injectable()
export class customerservice{

  private url:string="https://jsonplaceholder.typicode.com/posts";
  //private url:string="httpdata/mydata1.json";
  constructor(private http:Http){}
  getCustomers(){
    return this.http.get(this.url)
      .map((response:Response)=>response.json())//stop the code till this point without error handling
      .catch(this._errorHandler);

    /*received observable and convert
      it in json format before => operator it is called as input
      after => operator it is called as output in json format*/
  }
  _errorHandler(error:Response){
    console.error(error);
    return Observable.throw(error);
  }
}

/* if we want we can take data from
 "https://jsonplaceholder.typicode.com/posts" this is free web
 give the above in url part and change instead of customer.name
 just mention customer.title it will give all titles from tht api


 https://jsonplaceholder.typicode.com/ -- this is Fake Online REST API
 for Testing and Prototyping

*/
