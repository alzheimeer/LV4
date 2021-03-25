import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../services/data.service';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.scss']
})
export class Page5Component implements OnInit {

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
