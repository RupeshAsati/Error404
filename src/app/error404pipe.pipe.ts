import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'error404pipe'
})
export class Error404pipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
