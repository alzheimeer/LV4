import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.scss']
})
export class Page5Component implements OnInit {

  @Input()
  value!: number;


  constructor() {}

  ngOnInit(): void {}

  print(){
    this.value=2;
  }
  valuethesoon(value:any) {
    this.value=value;
  }

  register(){
    this.value=3;
  }
  requisitos(){
    this.value=4;
  }


}
