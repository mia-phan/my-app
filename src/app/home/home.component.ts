import { Component, OnInit } from '@angular/core';
import { Image, supports } from 'libs/interfaces/image.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public supportLogo: Image[] = supports;
  constructor() {}

  ngOnInit(): void {}
}
