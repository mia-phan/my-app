import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public carousel() {
    let slideIndex = 0;
    const x = document.getElementsByClassName('mySlide') as HTMLCollectionOf<HTMLElement>   //getElementByClassName only returns Element inwhich 'style' is not a property
    for (let image = 0; image < x.length; image++) {
      x[image].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
      slideIndex = 1
    }
    x[slideIndex-1].style.display = "block";
    setTimeout(this.carousel, 2000); // Change image every 2 seconds
  }
  
  public ngOnInit(): void {
  }

}
