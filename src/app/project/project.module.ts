import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavigationModule } from '../navigation/navigation.module';
import { ProjectAppComponent } from './project-app/project-app.component';
import { ProjectIllustrationComponent } from './project-illustration/project-illustration.component';
import { ProjectComponent } from './project.component';

const __routes: Routes = [
  {
    path: '',
    children: [
      { path: 'app', component: ProjectAppComponent },
      { path: 'illustration', component: ProjectIllustrationComponent },
      { path: '', component: ProjectComponent, pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectAppComponent,
    ProjectIllustrationComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(__routes), NavigationModule],
})
export class ProjectModule {}
