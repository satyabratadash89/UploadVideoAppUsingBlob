import { Component,trigger,state,style,transition,animate } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls:['./app.component.css'],
  template: `<h2>{{title}}</h2>
    <button (click)="togglecolor()">Togglecolor</button>
  <button (click)="toggledivheight()" class="btn btn-success">ToggleDivHeight</button>
    
        <div [@changecolor]="divState" class="divsec"></div>
  <div class="divbox" [@changeheight]="chState">
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
  </div>`,
  animations:[
    trigger('changecolor',[
      state('off',style({
        backgroundColor:'black'
      })),
      state('on',style({
        backgroundColor:'white'
      })),
      transition('off => on',[animate('2s')]),
      transition('on => off',[animate('2s')])
    ]),

    trigger('changeheight',[
      state('blankheight',style({
        height:0
      })),
      state('fullheight',style({
        height:'*'
      })),
      transition('blankheight <=> fullheight',[animate('2s')])

    ])
  ]
  })
export class AppComponent {
  title = 'app works!';
  divState:string="off";
  chState:string="fullheight";
  togglecolor(){

     this.divState=(this.divState==="off") ? "on":"off";
  //  console.log('hi');
  }
  toggledivheight(){
    this.chState=(this.chState==="blankheight") ? "fullheight":"blankheight";
  }

}
