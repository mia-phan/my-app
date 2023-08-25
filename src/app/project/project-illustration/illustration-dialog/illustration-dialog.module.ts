import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ShareBottomSheetModule } from './share-bottom-sheet/share-bottom-sheet.module';
import { IllustrationDialogComponent } from './illustration-dialog.component';

@NgModule({
  declarations: [IllustrationDialogComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    ShareBottomSheetModule,
  ],
})
export class IllustrationDialogModule {}
