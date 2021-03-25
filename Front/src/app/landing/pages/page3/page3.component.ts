import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {

  value = 0;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    // service for detect click in navbar for see login in card
    this.dataService.numberEnd$.subscribe(res => {
      this.value = 2;
    });
  }

  print(){
    this.value = 2;
  }
  valuethesoon(value: any) {
    this.value = value;
  }

  register(){
    this.value = 3;
  }
  requisitos(){
    this.value = 4;
  }


}
