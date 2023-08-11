import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Image } from 'libs/Utils/interfaces/image.interface';
import { heartIcon, shareIcon } from 'libs/Utils/icons/icons';

@Component({
  selector: 'app-illustration-dialog',
  templateUrl: './illustration-dialog.component.html',
  styleUrls: ['./illustration-dialog.component.scss'],
})
export class IllustrationDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Image,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIconLiteral(
      'share-icon',
      sanitizer.bypassSecurityTrustHtml(shareIcon)
    );
    iconRegistry.addSvgIconLiteral(
      'heart-icon',
      sanitizer.bypassSecurityTrustHtml(heartIcon)
    );
  }

  ngOnInit(): void {}
}
