import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greet'
})
export class GreetPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let input = Number(value);
    if (input < 12) {
      return 'Good Morning';
    } else if (input >= 12 && input <= 17) {
      return 'Good Afternoon';
    } else if (input > 17 && input <= 24) {
      return 'Good Evening';
    } else {
      return "I'm not sure what time it is!";
    }
  }

}
