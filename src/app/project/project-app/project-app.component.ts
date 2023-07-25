import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-app',
  templateUrl: './project-app.component.html',
  styleUrls: ['./project-app.component.scss'],
})
export class ProjectAppComponent implements OnInit {
  activedRoute: ActivatedRoute;

  constructor(activatedRoute: ActivatedRoute) {
    this.activedRoute = activatedRoute;
  }

  ngOnInit(): void {
    this.activedRoute.toString.bind;
  }
}
