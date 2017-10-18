import { Component } from '@angular/core';
import {EmployeeService} from './EmployeeService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeService]
})
export class AppComponent {
  title = 'app works!';

  constructor(private empservice:EmployeeService) {

  }
  onAddData(name: string){
   this.empservice.addData(name);
  }

  onGetData(){
    this.empservice.getData();
  }
}
