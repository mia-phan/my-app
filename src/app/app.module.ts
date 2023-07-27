import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CloudinaryModule } from '@cloudinary/ng';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutMeModule } from './about-me/about-me.module';
import { HomeModule } from './home/home.module';
import { NavigationModule } from './navigation/navigation.module';
import { FooterModule } from './utilities/footer/footer.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'projects',
    loadChildren: () =>
      import('./project/project.module').then((m) => m.ProjectModule),
  },
  { path: 'about', component: AboutMeComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CloudinaryModule,
    RouterModule.forRoot(routes),
    AboutMeModule,
    HomeModule,
    NavigationModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
