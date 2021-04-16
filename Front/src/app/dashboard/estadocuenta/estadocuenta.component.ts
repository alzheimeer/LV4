import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estadocuenta',
  templateUrl: './estadocuenta.component.html',
  styleUrls: ['./estadocuenta.component.scss']
})
export class EstadocuentaComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log('ng on init');
  }
}
