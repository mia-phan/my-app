import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '../navigation/navigation.module';
import { HeaderModule } from '../utilities/header/header.module';
import { HomeComponent } from './home.component';
import { FooterModule } from '../utilities/footer/footer.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HeaderModule, NavigationModule, FooterModule],
})
export class HomeModule {}
