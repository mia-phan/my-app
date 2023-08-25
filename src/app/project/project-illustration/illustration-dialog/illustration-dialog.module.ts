import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {
  MatBottomSheet,
  MatBottomSheetRef,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ShareDialogModule } from './share-dialog/share-dialog.module';
import { IllustrationDialogComponent } from './illustration-dialog.component';

@NgModule({
  declarations: [IllustrationDialogComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    ShareDialogModule,
  ],
  exports: [IllustrationDialogComponent],
  providers: [
    { provide: MatBottomSheetRef, useValue: {} },
    { provide: MatBottomSheet, useValue: {} },
  ],
})
export class IllustrationDialogModule {}
