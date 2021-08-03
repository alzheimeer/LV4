import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../../auth/services/auth.service';
import { RequestService } from '../../../dashboard/services/request.service';
import { UserService } from '../../../dashboard/services/user.service';
import { RequestIni, Requestx } from '../../../models/request.models';
import { User } from '../../../models/user.models';

@Component({
  selector: 'app-quick-verify',
  templateUrl: './quick-verify.component.html',
  styleUrls: ['./quick-verify.component.scss']
})
export class QuickVerifyComponent implements OnInit {

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
    'Scotiabank', ]
  public usuarios: User[] = [];
  public usuario: any = [];
  solicitud: Requestx = new RequestIni();
  id!: string;
  email!: string;
  nombre!: string;
  secondname!: string;
  apellido!: string;
  secondsurname!: string;
  tipodoc!: string;
  fechaNac!: Date;
  fechaExp!: Date;
  numdoc!: string;
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
  ingresos!: number;
  egresos!: number;
  ipAddress = '';

  part1 = true;
  part2 = false;

  get usuarioauth() {
    return this.authService.usuario;
  }
  
  hayerror = false;

  constructor(private router: Router, private userService: UserService, private authService: AuthService, private requestService: RequestService) { }

  ngOnInit(): void {
    
    this.authService.validarToken().subscribe(() => {
      this.userService.getUserById(this.authService.usuario.uid).subscribe(resp => {
        this.usuario = resp;
        this.id = resp._id;
        this.email = resp.email;
        this.nombre = resp.name;
        this.secondname = resp.secondname;
        this.apellido = resp.surname;
        this.secondsurname = resp.secondsurname;
        this.tipodoc = resp.personal.tipodoc;
        this.fechaNac = resp.personal.fechaNac;
        this.fechaExp = resp.personal.fechaExp;
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
        this.ingresos = resp.banca.ingresos;
        this.egresos = resp.banca.egresos;
      }, (err) => {
        this.hayerror = true;
      });
    });
    this.getIP();
  }

  getIP() {
    this.requestService.getIPAddress().subscribe((rta) => {
      this.ipAddress = rta.ip;
    });
  }

  adquirir() {
    // this.ipAddress = this.getIP();
    this.requestService.getRequestById(this.usuario.solicitud).subscribe((solicitudUser) => {
      Swal.fire({
        title: 'Espere',
        text: 'Enviando Solicitud De Prestamo',
        allowOutsideClick: false
      });
      Swal.showLoading();
      this.solicitud = solicitudUser;
      this.solicitud.estadoPrestamo = true;
      this.solicitud.regOk = true;
      this.solicitud.estate = 'Aprobada';
      this.solicitud.soloInteres = 612;
      this.solicitud.aval = 47200;
      this.solicitud.desAval = -16460;
      this.solicitud.desAdministracion = -75000;
      this.solicitud.administracion = 112500;
      this.solicitud.iva = 7125;
      this.solicitud.totalCredito = 279034;
      this.solicitud.valorCuotaTotal = 279034;
      this.solicitud.valorCuotaBase = 279034;
      this.solicitud.valorConsignar = 199200;

      this.requestService.updateRequestsById(this.solicitud).subscribe((xx) => {

        this.requestService.createPoderPdf(this.usuario, this.solicitud, this.ipAddress).subscribe((xxx) => {
          // console.log('PDF creado y enviado');
          // this.requestService.createContratoPdf(this.usuario, this.solicitud, this.ipAddress).subscribe((sss) => {
            Swal.fire({
              title: 'Revisa Tu Email',
              text: 'Te Enviamos Algunos Documentos',
              icon: 'success',
            });
            this.router.navigateByUrl('/dashboard/misolicitud');
          // });
        });
      });
    })
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
    this.usuario.secondname = this.secondname;
    this.usuario.surname = this.apellido;
    this.usuario.secondsurname = this.secondsurname;
    this.usuario.personal.tipodoc = this.tipodoc;
    this.usuario.personal.fechaNac = this.fechaNac;
    this.usuario.personal.fechaExp = this.fechaExp;
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
    this.usuario.banca.ingresos = this.ingresos;
    this.usuario.banca.egresos = this.egresos;
    if (this.usuario._id) {
      this.userService.updateUserById(this.usuario)
        .subscribe(resp => {
          Swal.fire({
            title: 'OK',
            text: 'Procesado!',
            icon: 'success',
          });
          this.part1 = false;
          this.part2 = true;
        }, (err) => {
          this.hayerror = true;
          console.log('Error');
        });
    }
  }
}
