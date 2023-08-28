import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public hello: string[] = ['h', 'e', 'l', 'l', 'o', '!'];

  constructor() {}

  private animatationHello() {}
  ngOnInit(): void {}
}
