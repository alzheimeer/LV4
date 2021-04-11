import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../auth/services/auth.service';
import { UserService } from '../../dashboard/services/user.service';
import { User } from '../../models/user.models';

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
  id!: string;
  email!: string;
  nombre!: string;
  apellido!: string;
  tipodoc!: string;
  numdoc!: any;
  pais!: string;
  departamento!: string;
  ciudad!: string;
  barrio!: string;
  direccion!: string;
  celular1!: any;
  celular2!: any;
  bbanco!: string;
  btipocuenta!: any;
  bnumcuenta!: any;

  get usuarioauth() {
    return this.authService.usuario;
  }
  hayerror = false;

  constructor(private router: Router, private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userService.getUserById(this.usuarioauth.uid)
      .subscribe(resp => {
        this.usuario = resp;
        this.id = resp._id;
        this.email = resp.email;
        this.nombre = resp.name;
        this.apellido = resp.surname;
        this.tipodoc = resp.personal.tipodoc;
        this.numdoc = resp.personal.numdoc;
        this.pais = resp.personal.pais;
        this.departamento = resp.personal.departamento;
        this.ciudad = resp.personal.ciudad;
        this.barrio = resp.personal.barrio;
        this.direccion = resp.personal.direccion;
        this.celular1 = resp.personal.celular1;
        this.celular2 = resp.personal.celular2;
        this.bbanco = resp.banca.banco;
        this.btipocuenta = resp.banca.tipocuenta;
        this.bnumcuenta = resp.banca.numcuenta;
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
    this.usuario._id = this.id;
    this.usuario.email = this.email;
    this.usuario.name = this.nombre;
    this.usuario.surname = this.apellido;
    this.usuario.personal.tipodoc = this.tipodoc;
    this.usuario.personal.numdoc = this.numdoc;
    this.usuario.personal.pais = this.pais;
    this.usuario.personal.departamento = this.departamento;
    this.usuario.personal.ciudad = this.ciudad;
    this.usuario.personal.barrio = this.barrio;
    this.usuario.personal.direccion = this.direccion;
    this.usuario.personal.celular1 = this.celular1;
    this.usuario.personal.celular2 = this.celular2;
    this.usuario.banca.banco = this.bbanco;
    this.usuario.banca.tipocuenta = this.btipocuenta;
    this.usuario.banca.numcuenta = this.bnumcuenta;
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
