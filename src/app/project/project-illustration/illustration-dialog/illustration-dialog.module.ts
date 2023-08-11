import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IllustrationDialogComponent } from './illustration-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [IllustrationDialogComponent],
  imports: [CommonModule, MatIconModule, MatDialogModule],
  exports: [IllustrationDialogComponent],
})
export class IllustrationDialogModule {}
