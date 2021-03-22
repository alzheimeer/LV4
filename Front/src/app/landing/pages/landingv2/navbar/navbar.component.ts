import { Component, HostListener, OnInit, ViewEncapsulation  } from '@angular/core';


@Component({
  selector: 'app-navbar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './navbar.component.html',
  styleUrls: [
    './navbar.component.css',

  ],
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  claseTitular = 'fixed-top';



  ngOnInit(): void {}

  @HostListener('window:scroll')
  scrollEvent() {
    window.pageYOffset >= 80
      ? (this.isScrolled = true)
      : (this.isScrolled = false);
  }


}
