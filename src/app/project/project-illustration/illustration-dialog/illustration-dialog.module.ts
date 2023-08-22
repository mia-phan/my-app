import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IllustrationDialogComponent } from './illustration-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ShareDialogModule } from './share-dialog/share-dialog.module';

@NgModule({
  declarations: [IllustrationDialogComponent],
  imports: [CommonModule, MatIconModule, MatDialogModule, ShareDialogModule],
  exports: [IllustrationDialogComponent],
})
export class IllustrationDialogModule {}
