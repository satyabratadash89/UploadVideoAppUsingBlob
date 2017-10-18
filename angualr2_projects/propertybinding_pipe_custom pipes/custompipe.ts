
import {Pipe,PipeTransform} from "@angular/core";
@Pipe({
  name:'titlecase'
})


export class custompipe implements PipeTransform{

  transform(value:string,upper:boolean){
    value=value.charAt(0).toUpperCase()+value.slice(1);
    if(upper){
      value=value.toUpperCase();
    }
    return value;
  }

}



