import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../image.service';
import { Image } from 'libs/Utils/interfaces/image.interface';

@Component({
  selector: 'app-image-post',
  templateUrl: './image-post.component.html',
  styleUrls: ['./image-post.component.scss'],
})
export class ImagePostComponent implements OnInit {
  public image: Image | undefined;

  constructor(private imageService: ImageService) {}

  private getImage(currentId: number) {
    this.imageService
      .getImage(currentId)
      .subscribe((image) => (this.image = image));
  }

  ngOnInit(): void {
    this.getImage(1);
  }
}
