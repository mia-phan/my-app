import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ImageService } from '../image.service';
import { Image } from 'libs/Utils/interfaces/image.interface';

@Component({
  selector: 'app-image-post',
  templateUrl: './image-post.component.html',
  styleUrls: ['./image-post.component.scss'],
})
export class ImagePostComponent implements OnInit {
  public image: Image | undefined;
  public isLoading = true;

  @Input()
  set id(imageId: string) {
    this.imageService.getImage(Number(imageId)).subscribe({
      next: (image) => {
        this.image = image;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
        this.snackbar.open('Image not found', undefined, { duration: 4000 });
      },
    });
  }

  constructor(
    private snackbar: MatSnackBar,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {}
}
