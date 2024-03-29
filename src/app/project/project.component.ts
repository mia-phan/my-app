import { Component, OnInit } from '@angular/core';
import { Image } from 'libs/Utils/interfaces/image.interface';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  public imagesIllustration: Image[] = [
    {
      id: 8,
      url: 'https://res.cloudinary.com/depf1ep80/image/upload/v1686181431/my-app/illustration-project/zelhel-athena-1_sqpkcv.jpg',
      title: 'athena',
    },
    {
      id: 9,
      url: 'https://res.cloudinary.com/depf1ep80/image/upload/v1686181397/my-app/illustration-project/zelhel-2b-1_c6rrsa.jpg',
      title: '2B',
    },
    {
      id: 10,
      url: 'https://res.cloudinary.com/depf1ep80/image/upload/v1686181363/my-app/illustration-project/zelhel-ilse-1_zkofbk.jpg',
      title: 'ilse',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
