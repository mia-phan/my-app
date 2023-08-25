import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import { Image } from 'libs/Utils/interfaces/image.interface';
import { heartIcon, readHeartIcon, shareIcon } from 'libs/Utils/icons/icons';
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
    public dialog: MatDialog,
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
        shareUrl: `http://localhost:4200/projetcs/image-post/${this.data.id}`,
        shareTitle: this.data.title,
      },
    });
  }

  ngOnInit(): void {}
}
