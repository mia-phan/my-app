import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.scss'],
})
export class ShareDialogComponent implements OnInit {
  public shareUrl: string;
  public shareTitle: string;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { shareUrl: string; shareTitle: string },
    private snackbar: MatSnackBar,
    private clibboard: Clipboard
  ) {
    this.shareTitle = this.data.shareTitle;
    this.shareUrl = this.data.shareUrl;
  }

  public ngOnInit(): void {}

  public shareVia() {
    // this.navigator.share({
    //   url: this.shareUrl,
    //   title: this.shareTitle,
    // });
    // .then(() => {
    //   this.bottomSheetRef.dismiss();
    // });
  }

  public copyLink() {
    this.clibboard.copy(this.shareUrl);
    this.snackbar.open('Copied!', undefined, { duration: 4000 });
    // this.bottomSheetRef.dismiss();
  }
}
