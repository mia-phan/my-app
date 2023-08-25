import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NavigationModule } from './navigation/navigation.module';
import { FooterModule } from './utilities/footer/footer.module';
import { HomeModule } from './home/home.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'projects',
    loadChildren: () =>
      import('./project/project.module').then((m) => m.ProjectModule),
  },
  { path: 'about', component: AboutMeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {
      bindToComponentInputs: true,
    }),
    HomeModule,
    NavigationModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
