import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { angular } from 'libs/icons/icons';
import { Image, supports } from 'libs/interfaces/image.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public supportLogo: Image[] = supports;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral(
      'angular',
      sanitizer.bypassSecurityTrustHtml(angular)
    );
  }

  ngOnInit(): void {}
}
