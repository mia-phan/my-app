import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IllustrationDialogComponent } from './illustration-dialog.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [IllustrationDialogComponent],
  imports: [CommonModule, MatIconModule],
  exports: [IllustrationDialogComponent],
})
export class IllustrationDialogModule {}
