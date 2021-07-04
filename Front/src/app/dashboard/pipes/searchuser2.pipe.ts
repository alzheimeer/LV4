import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchuser2'
})
export class SearchuserPipe2 implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
