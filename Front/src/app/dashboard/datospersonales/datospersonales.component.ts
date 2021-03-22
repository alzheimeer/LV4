import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/services/auth.service';
import { DashboardService } from '../../auth/services/dashboard.service';
import { User } from '../../models/user.models';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-datospersonales',
  templateUrl: './datospersonales.component.html',
  styleUrls: ['./datospersonales.component.scss']
})
export class DatospersonalesComponent implements OnInit {
  public tiposIdentificacion = ['Cedula De Ciudadania', 'Cedula De Extranjeria', 'Cedula De Ciudadania'];
  public paises = ['Colombia', 'Venezuela', 'Brazil', 'Argentina', 'Peru', 'Chile', 'Ecuador', 'Bolivia', 'Uruguay', 'Paraguay', 'Otro'];
  public tipocuenta = ['Cuenta De Ahorros', 'Cuenta Corriente'];
  public bancos = [
    'Banco de Bogota',
    'Banco Popular',
    'Banco CorpBanca',
    'Bancolombia',
    'Citibank',
    'Banco GNB Sudameris',
    'BBVA Colombia',
    'Banco De Occidente',
    'Banco Caja Social',
    'Davivienda',
    'Scotiabanck',
    'Banagrario',
    'AV Villas',
    'Scotiabank',]
  public usuarios: User[] = [];
  public usuario: any = [];

  get usuarioauth() {
    return this.authService.usuario;
  }
  hayerror = false;

  constructor(private router: Router, private dashboardService: DashboardService, private authService: AuthService) { }

  ngOnInit(): void {
    this.dashboardService.getUserById(this.usuarioauth.uid)
      .subscribe(resp => {
        this.usuario = resp;
      }, (err) => {
        this.hayerror = true;
      });
  }

  guardar(form: NgForm) {
    if (form.invalid) {
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
    if (this.usuario._id) {
      this.dashboardService.updateUserById(this.usuario)
        .subscribe(resp => {
          console.log(resp);
          Swal.fire({
            title: 'OK',
            text: 'Datos Personales Enviados',
            icon: 'success',
          });
          this.router.navigateByUrl('/dashboard/datosinmueble');
        }, (err) => {
          this.hayerror = true;
          console.log('Error');
        });
    }
  }



}
