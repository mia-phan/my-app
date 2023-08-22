import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProjectAppComponent } from './project-app/project-app.component';
import { ProjectIllustrationComponent } from './project-illustration/project-illustration.component';
import { ProjectIllustrationModule } from './project-illustration/project-illustration.module';
import { ProjectComponent } from './project.component';
import { ImagePostComponent } from './project-illustration/illustration-dialog/image-post/image-post.component';

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
    ProjectIllustrationModule,
  ],
})
export class ProjectModule {}
