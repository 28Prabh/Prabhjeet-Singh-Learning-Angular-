import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starPipe',
  standalone: true
})
export class StarPipePipe implements PipeTransform {

  transform(star:string): unknown {
    const betterStars = star.replaceAll("*","\u2605");
    return betterStars;
  }

}
