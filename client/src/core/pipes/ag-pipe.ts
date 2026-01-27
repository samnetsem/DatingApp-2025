import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ag'
})
export class AgPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
