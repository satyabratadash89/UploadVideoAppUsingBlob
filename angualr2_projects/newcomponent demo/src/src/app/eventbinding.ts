
import {Component} from "@angular/core";

@Component({
  selector: 'eventbind-comp',
  template: `<h1 (click)="showCompany()">click here</h1>`


})
export class eventbinding{
  orgname:string="hp";

showCompany(){
  //this.orgname="Accenture";
  console.log('My organization name '+this.orgname);
}
}

