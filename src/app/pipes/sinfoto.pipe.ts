import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {
  transform(imagenes: any[]): any {
    if(imagenes)
      if(imagenes.length > 0) return imagenes[1].url;
      else return 'assets/img/noimage.png';
    else return 'assets/img/noimage.png';
  }
}
