import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {
  constructor(private donSanitazer:DomSanitizer){ }

  transform(value: any, url:string): any {
    return this.donSanitazer.bypassSecurityTrustResourceUrl( url + value);
  }

}
