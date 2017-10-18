//create service

import {Injectable} from '@angular/core';

@Injectable() // this is the way to tell angular tht there is dependancy
export class customerservice{
  getCustomers(){
    return[
      {"id":101,"name":"mika","age":23},
      {"id":102,"name":"sam","age":26},
      {"id":103,"name":"john","age":22},
    ]

  }
}
