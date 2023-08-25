import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareBottomSheetComponent } from './share-bottom-sheet.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {
  MatBottomSheetModule,
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

@NgModule({
  declarations: [ShareBottomSheetComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatBottomSheetModule,
  ],
})
export class ShareBottomSheetModule {}
