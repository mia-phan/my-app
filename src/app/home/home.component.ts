import { Component, Input, OnInit } from '@angular/core';
import { ImageSlider } from '../utilities/header/imageSlide.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  slides: ImageSlider[] = [
    {
      url: 'https://res.cloudinary.com/depf1ep80/image/upload/v1685595930/my-app/photo-1517639493569-5666a7b2f494_qjr0td.jpg',
      title: 'skyOne',
    },
    {
      url: 'https://res.cloudinary.com/depf1ep80/image/upload/v1685595903/my-app/photo-1607102520765-c0fd240b2457_olfscm.jpg',
      title: 'skyTwo',
    },
    {
      url: 'https://res.cloudinary.com/depf1ep80/image/upload/v1685595831/my-app/photo-1517315003714-a071486bd9ea_jnbd2h.jpg',
      title: 'skyThree',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
