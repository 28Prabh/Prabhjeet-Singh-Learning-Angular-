import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starPipe',
  standalone: true
})
export class StarPipePipe implements PipeTransform {

  transform(star:string): string {
    const betterStars = star.replaceAll("*","\u2605");
    return betterStars.toString();
  }

}
