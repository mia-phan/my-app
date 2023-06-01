import { Component, OnInit } from '@angular/core';
import { CloudinaryImage } from '@cloudinary/url-gen';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  myImage =  new CloudinaryImage('v1685585511/my-app/2848BF11-215B-4AA7-827A-5671DEE52AB1_akvk6s', {cloudName: 'depf1ep80'});
  constructor() { }
  
  ngOnInit(): void {
  }

}
