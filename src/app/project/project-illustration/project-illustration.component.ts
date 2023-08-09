import { Component, OnInit, Input } from '@angular/core';
import { Image, images } from 'libs/Utils/interfaces/image.interface';
import { MatDialog } from '@angular/material/dialog';

import { IllustrationDialogComponent } from './illustration-dialog/illustration-dialog.component';

@Component({
  selector: 'app-project-illustration',
  templateUrl: './project-illustration.component.html',
  styleUrls: ['./project-illustration.component.scss'],
})
export class ProjectIllustrationComponent implements OnInit {
  @Input() public image!: Image;
  @Input() public images: Image[] = images;

  constructor(public dialog: MatDialog) {}

  openImageDialog() {
    this.dialog.open(IllustrationDialogComponent, {
      width: '600px',
      data: {},
    });
  }

  ngOnInit() {}
}
