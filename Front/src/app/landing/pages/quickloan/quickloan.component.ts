import { Component, Input, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-quickloan',
  templateUrl: './quickloan.component.html',
  styleUrls: ['./quickloan.component.scss']
})
export class QuickloanComponent implements OnInit {

  @Input() value: number = 0;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    // service for detect click in navbar for see login in card
    this.dataService.numberEnd$.subscribe(res => {
      this.value = 2;
    });
  }

  print() {
    this.value = 2;
  }

  valuethesoon(value: any) {
    this.value = value;
  }

  register() {
    this.value = 3;
  }

  login() {
    this.value = 2;
  }

  requisitos() {
    this.value = 4;
  }

}
