import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Image } from 'libs/interfaces/image.interface';
import {
  closeIcon,
  heartIcon,
  readHeartIcon,
  shareIcon,
} from 'libs/icons/icons';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ShareBottomSheetComponent } from './share-bottom-sheet/share-bottom-sheet.component';

@Component({
  selector: 'app-illustration-dialog',
  templateUrl: './illustration-dialog.component.html',
  styleUrls: ['./illustration-dialog.component.scss'],
})
export class IllustrationDialogComponent implements OnInit {
  // @Input() public count: number = 0;
  @Output() public countChange = new EventEmitter<number>();

  public isCliked = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Image,
    public dialogRef: MatDialogRef<IllustrationDialogComponent>,
    public bottomSheet: MatBottomSheet,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIconLiteral(
      'share-icon',
      sanitizer.bypassSecurityTrustHtml(shareIcon)
    );
    iconRegistry.addSvgIconLiteral(
      'heart-icon',
      sanitizer.bypassSecurityTrustHtml(heartIcon)
    );
    iconRegistry.addSvgIconLiteral(
      'red-heart-icon',
      sanitizer.bypassSecurityTrustHtml(readHeartIcon)
    );
    iconRegistry.addSvgIconLiteral(
      'close-icon',
      sanitizer.bypassSecurityTrustHtml(closeIcon)
    );
  }

  public clickedHeartIcon() {
    this.isCliked = !this.isCliked;
    // if (this.isCliked) {
    //   this.count++;
    // } else {
    //   this.count--;
    // }
    // this.countChange.emit(this.count);
  }

  public openBottomSheet() {
    this.bottomSheet.open(ShareBottomSheetComponent, {
      data: {
        shareUrl: `http://miaphan.me/projects/image-post/${this.data.id}`,
        shareTitle: this.data.title,
      },
    });
  }

  public closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
