import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareDialogComponent } from './share-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {
  MatBottomSheetModule,
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

@NgModule({
  declarations: [ShareDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatBottomSheetModule,
  ],
  exports: [ShareDialogComponent],
  providers: [
    { provide: MatBottomSheetRef, useValue: {} },
    { provide: MatBottomSheet, useValue: {} },
  ],
})
export class ShareDialogModule {}
