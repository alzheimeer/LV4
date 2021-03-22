import { Component, OnInit,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rq1',
  templateUrl: './requisito-personal.component.html',
  styleUrls: ['./requisito-personal.component.scss']
})
export class RequisitoPersonalComponent implements OnInit {

  @Output()
  value = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  calc(valor: number){
    this.value.emit(valor);
  }

}
