import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DataPersonalModel } from '../../models/datapersonal.models';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit {

  @Output()
  value = new EventEmitter<number>();

  valor: number = 100000;
  meses: number = 1;
  tasa: number = 1.8778;
  interes: number = (this.valor/100)*this.tasa;
  tasaIva: number = 3762;
  iva: number = this.tasaIva;
  aval: number = (this.valor/100)*9.9;
  tecno: number = this.meses *19800;
  total: number = this.valor + this.interes + this.iva + this.aval + this.tecno;
  emi: number = this.total / this.meses;

  data: DataPersonalModel = new DataPersonalModel();

  get usuario() {
    return this.authService.usuario;
  }

  constructor(private router: Router, private authService: AuthService) { }

  next(x:any) {
    console.log(x);
    if (x === 'Personal'){
     this.router.navigateByUrl('/dashboard/datospersonales');
    }
    if (x === 'Sobre Hipoteca'){
     this.router.navigateByUrl('/dashboard/datosinmueble');
    }
    if (x === 'Sobre Vehiculo'){
     this.router.navigateByUrl('/dashboard/datosvehiculo');
    }
    if (x === 'Para Construccion'){
     this.router.navigateByUrl('/dashboard/datosconstruccion');
    }
  }

  guardar(form: NgForm) {
    if ( form.invalid ) {
      console.log('Formulario no válido');
      Swal.fire({
        title: 'Error',
        text: 'Formulario no válido',
        icon: 'error',
      });
      return;
    }



    Swal.fire({
      title: 'Espere',
      text: 'Guardando Informacion',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if ( this.data.id ) {
      peticion = this.authService.completeUserById( this.data );
    }

    // peticion.subscribe( resp => {

    //   Swal.fire({
    //     title: 'Datos Personales',
    //     text: 'Guardados Con Exito',
    //     icon: 'success',
    //   });
    // });
  }


  ngOnInit(): void {
    this.data.id = this.usuario.uid;
  }







  changeValueMeses(e:any) {
    this.meses = e.value;
    if (this.meses == 1)
      this.tasa = 1.8778;
    if (this.meses == 2)
      this.tasa = 2.8243;
    if (this.meses == 3)
      this.tasa = 3.77715;
    if (this.meses == 4)
      this.tasa = 4.73595;
    if (this.meses == 5)
      this.tasa = 5.70065;
    if (this.meses == 6)
      this.tasa = 6.67105;
    this.iva = this.tasaIva * this.meses;
    this.aval = (this.valor / 100 ) * 9.9;
    this.tecno = this.meses *19800;
    this.interes = (this.valor/100)*this.tasa;
    this.total = this.valor + this.interes + this.iva + this.aval + this.tecno;
    this.emi = this.total / this.meses;
  }

  changeValueValor(e:any) {
    this.valor = e.value;
    this.iva = this.tasaIva * this.meses;
    this.aval = (this.valor / 100 ) * 9.9;
    this.tecno = this.meses *19800;
    this.interes = (this.valor/100)*this.tasa;
    this.total = this.valor + this.interes + this.iva + this.aval + this.tecno;
    this.emi = this.total / this.meses;
  }

  pepe(){
    this.interes = (this.valor/100)*1.8778;
    console.log('dasd',this.interes);
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }
  formatLabel1(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  calc(valor: number){
    this.value.emit(valor);
  }
}
