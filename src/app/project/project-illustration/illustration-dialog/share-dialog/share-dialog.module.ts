import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareDialogComponent } from './share-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

@NgModule({
  declarations: [ShareDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatBottomSheetModule,
  ],
  exports: [ShareDialogComponent],
})
export class ShareDialogModule {}
