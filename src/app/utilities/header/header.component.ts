import { Component, Input, OnInit } from '@angular/core';
import { ImageSlider } from './imageSlide.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() slides: ImageSlider[] = [];

  constructor() {}

  currentIndex: number = 0;

  getCurrentImageUrl(): string {
    return `url('${this.slides[this.currentIndex].url}')`;
  }

  ngOnInit(): void {}
}
