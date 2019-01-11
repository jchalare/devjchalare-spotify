import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(img: any): string {

    if (!img) {
      return 'assets/img/noimage1.png';
    }

    if (img.length > 0) {
      return img[0].url;
    } else {
      return 'assets/img/noimage1.png';
    }

  }

}
