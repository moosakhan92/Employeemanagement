import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value=='1'){
      return "Sunday- "+value;
    }
    else{
      return "Monday- "+value;
    }
  }

}
