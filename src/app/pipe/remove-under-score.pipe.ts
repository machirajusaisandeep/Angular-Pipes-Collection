import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeUnderScore'
})
export class RemoveUnderScorePipe implements PipeTransform {
 transform(value: any, args?: any): any {
    return value.replace(/_/g, '  ');
  }
}