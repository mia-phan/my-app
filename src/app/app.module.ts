import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectComponent } from './project/project.component';
<<<<<<< HEAD
import { ImageSliderModule } from './utilities/image-slider/image-slider.module';
import { SlideInterface } from './utilities/image-slider/types/slide.interface';
=======
import { HeaderComponent } from './utilities/header/header.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> 6cd573654b468ddb531305add9c1eacef5d1b407

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
<<<<<<< HEAD
    ImageSliderModule,
    RouterModule.forRoot(routes)
=======
    RouterModule.forRoot(routes),
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule
>>>>>>> 6cd573654b468ddb531305add9c1eacef5d1b407
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
