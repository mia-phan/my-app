import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ImageSliderComponent } from './image-slider.component';



@NgModule({
  declarations: [
    ImageSliderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    ImageSliderComponent
  ]
})
export class ImageSliderModule { }
