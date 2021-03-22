import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output()
  value = new EventEmitter<number>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  async calc(valor: number){
    this.value.emit(valor);
    // Aqui cambio de ruta para que recargue el componente y vayaal componente card login
    await this.router.navigateByUrl('/landing/hipoteca');
    this.router.navigateByUrl('/dashboard/personal');
  }
}
