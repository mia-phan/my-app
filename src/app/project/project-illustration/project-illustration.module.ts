import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudinaryModule } from '@cloudinary/ng';
import { MatDialogModule } from '@angular/material/dialog';

import { IllustrationDialogComponent } from './illustration-dialog/illustration-dialog.component';
import { ProjectIllustrationComponent } from './project-illustration.component';

@NgModule({
  declarations: [ProjectIllustrationComponent, IllustrationDialogComponent],
  imports: [CommonModule, CloudinaryModule, MatDialogModule],
  exports: [ProjectIllustrationComponent],
})
export class ProjectIllustrationModule {}
