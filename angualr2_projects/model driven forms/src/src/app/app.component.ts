import {Component} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

 })
export class AppComponent {
  customerForm=new FormGroup({
    name:new FormControl('MSRJG',[Validators.required,Validators.minLength(4),Validators.maxLength(6)]),//MSRJG is default value
    age:new FormControl(),
      phone:new FormControl(),
      city:new FormControl()
//Validators.required acts like mandatory field.
    //if we want to add more validation then put it inside [] which becomes array
  });
onSubmit(){
    console.log(this.customerForm.value);
}
}
