import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cm'
})
export class CentimeterPipe implements PipeTransform {

  transform(value: any, ...args: any[]) {
    if (value && !isNaN(value)) {
      const cm = value * 2.54;
      const decimals = (args && args[0]) || 2;
      return cm.toFixed(decimals);
    }
    return null;
  }
}
