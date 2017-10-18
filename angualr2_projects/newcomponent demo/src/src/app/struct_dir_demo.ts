import {Component} from "@angular/core";


@Component({
  selector:'structdirdemo',
  template:`
  <button (click)="showlang()">{{displaylang ? "Hide":"Show"}}</button>
  <h2>Langauges</h2>
  <div *ngIf="displaylang">
    <ul>
      <li *ngFor="let l1 of langauages">{{l1}}</li>
    </ul>
  </div>
  `
})
export class struct_dir_demo{
  langauages:string[];
  displaylang:boolean;
  constructor(){
    this.langauages=['eng','jap'];
  }
  showlang(){
    if(this.displaylang == true) {
      this.displaylang = false;
    }else {
      this.displaylang = true;
    }
  }

}
