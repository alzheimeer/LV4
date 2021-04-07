import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/services/auth.service';
import { UserService } from '../../dashboard/services/user.service';
import { User } from '../../models/user.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-misdatos',
  templateUrl: './misdatos.component.html',
  styleUrls: ['./misdatos.component.scss'],
})
export class MisdatosComponent implements OnInit {
  public tiposIdentificacion = ['Cedula De Ciudadania', 'Cedula De Extranjeria'];
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

  constructor(private router: Router, private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userService.getUserById(this.usuarioauth.uid)
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
      this.userService.updateUserById(this.usuario)
        .subscribe(resp => {
          Swal.fire({
            title: 'OK',
            text: 'Actualización Exitosa',
            icon: 'success',
          });
        }, (err) => {
          this.hayerror = true;
          console.log('Error');
        });
    }
  }
}
