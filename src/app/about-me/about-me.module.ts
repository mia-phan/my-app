import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudinaryModule } from '@cloudinary/ng';
import { NavigationModule } from '../navigation/navigation.module';
import { AboutMeComponent } from './about-me.component';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [CommonModule, CloudinaryModule, NavigationModule],
})
export class AboutMeModule {}
