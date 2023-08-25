import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-share-bottom-sheet',
  templateUrl: './share-bottom-sheet.component.html',
  styleUrls: ['./share-bottom-sheet.component.scss'],
})
export class ShareBottomSheetComponent implements OnInit {
  public shareUrl: string;
  public shareTitle: string;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA)
    public data: { shareUrl: string; shareTitle: string },
    private snackbar: MatSnackBar,
    private clibboard: Clipboard,
    private bottomSheetRef: MatBottomSheetRef<ShareBottomSheetComponent>
  ) {
    this.shareTitle = this.data.shareTitle;
    this.shareUrl = this.data.shareUrl;
  }

  public ngOnInit(): void {}

  public shareVia() {
    if (navigator.share) {
      navigator
        .share({
          url: this.data.shareUrl,
          title: this.data.shareTitle,
        })
        .then(
          () => {
            this.bottomSheetRef.dismiss();
          },
          (err) => {
            console.log(err);
            this.snackbar.open('Failed to share', undefined, {
              duration: 4000,
            });
            this.bottomSheetRef.dismiss();
          }
        );
      // console.log(this.data.shareUrl);
    }
  }

  public copyLink() {
    this.clibboard.copy(this.shareUrl);
    this.snackbar.open('Copied!', undefined, { duration: 4000 });
    this.bottomSheetRef.dismiss();
  }

  public close() {
    this.bottomSheetRef.dismiss();
  }
}
