import { Pipe, PipeTransform } from '@angular/core';

const DEFAULT_IMAGE_PATH = '../../assets/images/pipeImage.png';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(imagePath: string): string {
    if (imagePath.trim().length === 0)
      return DEFAULT_IMAGE_PATH
    else
      return imagePath
  }

}
