import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudinaryModule } from '@cloudinary/ng';
import { MatDialogModule } from '@angular/material/dialog';

import { IllustrationDialogModule } from './illustration-dialog/illustration-dialog.module';
import { ProjectIllustrationComponent } from './project-illustration.component';
import { ImagePostComponent } from './illustration-dialog/image-post/image-post.component';

@NgModule({
  declarations: [ProjectIllustrationComponent, ImagePostComponent],
  imports: [
    CommonModule,
    CloudinaryModule,
    MatDialogModule,
    IllustrationDialogModule,
  ],
  exports: [ProjectIllustrationComponent],
})
export class ProjectIllustrationModule {}
