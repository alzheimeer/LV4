import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {

  @Input()
  valuex: number = 0;


  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges was called!');
  //   console.log(changes);
  // }

  // ngDoCheck() {
  //   if(this.value == 2)
  //     this.value=2;
  //   console.log('ngDoCheck was called!', this.value);
  // }

  constructor() {

  }

  ngOnInit(): void {
    // console.log('page1', this.value);
  }

  print(){
    this.valuex=2;
  }
  valuethesoon(value:any) {
    this.valuex=value;
  }

  register(){
    this.valuex=3;
  }
  requisitos(){
    this.valuex=4;
  }


}