import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-hipoteca',
  templateUrl: './hipoteca.component.html',
  styleUrls: ['./hipoteca.component.css',
]
})
export class HipotecaComponent implements OnInit {

  isScrolled = false;
  claseTitular = 'fixed-top';
  valor = 50000;
  meses = 1;
  varmes = 'mes';

  interes = 1.5;
  iva = 19;
  total = 0;
  emi = 0;

  images = [
    'index-three-slider-1',
    'index-three-slider-2',
    'index-three-slider-3',
  ].map((n) => `assets/images/${n}.jpg`);
  constructor() {
  }

  ngOnInit(): void {}

  @HostListener('window:scroll')
  scrollEvent() {
    window.pageYOffset >= 80
      ? (this.isScrolled = true)
      : (this.isScrolled = false);
  }


}
