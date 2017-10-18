import {Injectable} from '@angular/core';

@Injectable()
export class EmployeeService {
  names:string[]= [];
  addData(s: string) {
    this.names.push(s);
    console.log(s + ' Is added to employee List');
  }
  getData(){
    console.log(this.names);
  }
}

