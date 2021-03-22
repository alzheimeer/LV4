import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rq2',
  templateUrl: './requisito-vehiculo.component.html',
  styleUrls: ['./requisito-vehiculo.component.scss']
})
export class RequisitoVehiculoComponent implements OnInit {

  @Output()
  value = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  calc(valor: number){
    this.value.emit(valor);
  }

}
