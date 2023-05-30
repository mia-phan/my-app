import { Component, OnInit, Input } from '@angular/core';
import { SlideInterface } from './types/slide.interface';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  constructor() { }

  @Input() slides: SlideInterface[] = [];

  ngOnInit(): void {
  }

}
