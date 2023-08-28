import { Component, OnInit } from '@angular/core';
import { Image } from 'libs/interfaces/image.interface';
import { MatDialog } from '@angular/material/dialog';

import { IllustrationDialogComponent } from './illustration-dialog/illustration-dialog.component';
import { ImageService } from './image.service';

@Component({
  selector: 'app-project-illustration',
  templateUrl: './project-illustration.component.html',
  styleUrls: ['./project-illustration.component.scss'],
})
export class ProjectIllustrationComponent implements OnInit {
  public images: Image[] = [];
  public id!: number;
  public imgUrl!: string;

  constructor(public dialog: MatDialog, private imageService: ImageService) {}

  private getImages(): void {
    this.imageService.getImages().subscribe((images) => (this.images = images)); //fetch data synchronously with ObServable data
  }

  public openImageDialog(image: Image) {
    this.dialog.open(IllustrationDialogComponent, {
      width: '1000px',
      data: image,
    });
  }

  ngOnInit(): void {
    this.getImages();
  }
}
