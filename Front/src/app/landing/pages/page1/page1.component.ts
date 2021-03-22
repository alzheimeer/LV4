import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class Page1Component implements OnInit  {

  @Input()
  value!: number;


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
