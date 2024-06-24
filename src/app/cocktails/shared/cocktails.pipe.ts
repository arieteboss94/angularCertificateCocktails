import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cocktails',
  standalone: true
})
export class CocktailsPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): unknown {
    return value.join(', ');
  }

}
