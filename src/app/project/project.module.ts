import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProjectAppComponent } from './project-app/project-app.component';
import { ProjectIllustrationComponent } from './project-illustration/project-illustration.component';
import { ProjectIllustrationModule } from './project-illustration/project-illustration.module';
import { ProjectComponent } from './project.component';
import { ImagePostComponent } from './project-illustration/image-post/image-post.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

const __routes: Routes = [
  {
    path: '',
    children: [
      { path: 'app', component: ProjectAppComponent },
      { path: 'illustration', component: ProjectIllustrationComponent },
      { path: 'image-post/:id', component: ImagePostComponent },
      { path: '', component: ProjectComponent, pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(__routes),
    MatBottomSheetModule,
    ProjectIllustrationModule,
  ],
})
export class ProjectModule {}
