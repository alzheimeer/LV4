import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-requisito-quickloan',
  templateUrl: './requisito-quickloan.component.html',
  styleUrls: ['./requisito-quickloan.component.scss']
})
export class RequisitoQuickloanComponent implements OnInit {

  @Output()
  value = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  calc(valor: number) {
    this.value.emit(valor);
  }

}
