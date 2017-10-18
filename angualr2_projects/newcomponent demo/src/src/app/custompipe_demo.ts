import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
  name:'Double'
})

export class custompipe_demo implements PipeTransform{
  transform(value: any, args?: any): any
  {
    return value *2;
  }
}
