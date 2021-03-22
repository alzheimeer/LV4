import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rq4',
  templateUrl: './requisito-construccion.component.html',
  styleUrls: ['./requisito-construccion.component.scss']
})
export class RequisitoConstruccionComponent implements OnInit {

  @Output()
  value = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  calc(valor: number){
    this.value.emit(valor);
  }

}
