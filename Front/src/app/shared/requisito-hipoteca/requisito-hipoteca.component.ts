import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rq3',
  templateUrl: './requisito-hipoteca.component.html',
  styleUrls: ['./requisito-hipoteca.component.scss']
})
export class RequisitoHipotecaComponent implements OnInit {

  @Output()
  value = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  calc(valor: number){
    this.value.emit(valor);
  }

}
