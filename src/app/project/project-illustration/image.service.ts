import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Image, imagesDemo } from 'libs/Utils/interfaces/image.interface';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor() {}

  getImages(): Observable<Image[]> {
    const images = of(imagesDemo); //of(imageDemo) returns an Observable<Image[]> that emits a single value, the array of imagesDemo
    return images;
  }

  getImage(id: number): Observable<Image | undefined> {
    const image = of(imagesDemo.find((image) => image.id == id));
    return image;
  }
}
