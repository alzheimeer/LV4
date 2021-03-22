import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  // @Input()
  value: number = 0;
  component1!: any;
  constructor() { }

  ngOnInit(): void {
  }

  valuethesoon(value:any) {
    this.value=value;
  }

  onOutletLoaded(component:any) {
    component.value = this.value;

}


}
