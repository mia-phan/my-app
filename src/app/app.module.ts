import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectComponent } from './project/project.component';
import { ImageSliderModule } from './utilities/image-slider/image-slider.module';
import { SlideInterface } from './utilities/image-slider/types/slide.interface';

const routes: Routes =[
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'about', component: AboutMeComponent },
  { path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    AboutMeComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    ImageSliderModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  slides: SlideInterface[] = [
    { url: './src/assets/clem-onojeghuo-Ud4GcZW3rOY-unsplash.jpg', title: 'figureOne' },
    { url: './src/assets/jean-philippe-delberghe-75xPHEQBmvA-unsplash.jpg', title: 'figureTwo' },
    { url: './src/assets/fabio-oyXis2kALVg-unsplash.jpg', title: 'figureThree'},
  ]
}
