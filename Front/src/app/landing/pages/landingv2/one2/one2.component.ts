import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  encapsulation: ViewEncapsulation.None,
  templateUrl: './one2.component.html',
  styleUrls: ['./one2.component.css'],
})
export class One2Component implements OnInit {
  isScrolled = false;
  claseTitular = 'fixed-top';


  images = [
    'index-three-slider-1',
    'index-three-slider-2',
    'index-three-slider-3',
  ].map((n) => `assets/images/${n}.jpg`);
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll')
  scrollEvent() {
    window.pageYOffset >= 80
      ? (this.isScrolled = true)
      : (this.isScrolled = false);
  }
}
