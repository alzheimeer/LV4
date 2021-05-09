import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../auth/services/auth.service';
import { Product, ProductIni } from '../../models/product.models';
import { Requestx } from '../../models/request.models';
import { ProductService } from '../services/product.service';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss'],
})
export class SolicitudComponent implements OnInit {

  nombre = '';
  valorSolicitado = 0;
  plazo = 0;
  iMesVencido = 0;
  iEfectivoAnual = 0;
  iEfectivoAnualMax = 0;
  iMoraEfectivoAnual = 0;
  soloInteres = 0;
  valorCuotaBase = 0;
  administracion = 0;
  administracionp = 0;
  iva = 0;
  ivap = 0;
  aval = 0;
  avalp = 0;
  valuemin = 0;
  valuemax = 0;
  termmin = 0;
  termmax = 0;
  totalCredito = 0;
  totalPersonal = 0;
  parqueadero = 0;
  peritaje = 0;
  registroSimit = 0;
  gmfCuatroxMil = 0;
  step = 0;
  comisionAdminHipo = 0;
  comisionAdminHipo1 = 0;
  excedenteComisionAdminHipo = 0;
  registroHipoteca = 0;
  interesesAnticipadosp = 0;
  interesesAnticipados = 0;

  valorConsignar = 0;
  valorCuotaTotal = 0;


  get usuario(): any {
    return this.authService.usuario;
  }

  formularioSolicitud: FormGroup = this.fb.group({
    idUser: [this.usuario.uid, Validators.required],
    idProduct: ['', Validators.required],
    value: [0, Validators.required],
    time: [0, Validators.required],
    description: ['Ninguno', Validators.required],
    estate: ['Pendiente'],
    regInmueble: [false],
    regPersonales: [false],
    regVehiculo: [false],
    regTrabajo: [false],
    regReferencias: [false],
    regReferenciasCom: [false],
    regCedula: [false],
    regPasaporte: [false],
    regTarjetav: [false],
    regMatricula: [false],
    regExtracto: [false],
  });

  productos: Product[] = [];
  producto: Product = new ProductIni();
  request: Requestx[] = [];
  hayerror = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private productService: ProductService,
    private authService: AuthService,
    private requestService: RequestService
  ) {

    // VERIFICAMOS SI EL USUARIO TIENE SOLICITUDES SI ES ASI LO ENVIAMOS A MISOLICITUD
    this.requestService.getRequestByIdUser(this.usuario.uid).subscribe((resp) => {
      if (resp.length > 0) {
        this.router.navigate(['/dashboard/misolicitud']);
      } else {
        console.log('Usuario no  tiene solicitudes')
      }

      this.request = resp;
    });

    this.productService.getProducts().subscribe((resp) => {
      this.productos = resp;
    });


  }
  formatThumbLabel(value: number) {
    if (value >= 1000) {
      this.valorSolicitado = value;
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  ngOnInit(): void {

    this.formularioSolicitud.get('idProduct')?.valueChanges.subscribe((id) => {
      this.productService.getProductById(id).subscribe((producto) => {
        // Reset Valores
        this.parqueadero = 0;
        this.peritaje = 0;
        this.registroSimit = 0;
        this.gmfCuatroxMil = 0;
        this.totalPersonal = 0;
        this.comisionAdminHipo = 0;
        this.comisionAdminHipo1 = 0;
        this.excedenteComisionAdminHipo = 0;
        this.registroHipoteca = 0;
        this.interesesAnticipados = 0;
        this.interesesAnticipadosp = 0;
        this.administracion = 0;
        this.administracionp = 0;
        this.aval = 0;
        this.avalp = 0;
        this.totalCredito = 0;
        this.soloInteres = 0;
        this.valorCuotaTotal = 0;
        // Fin Reset Valores

        this.producto = producto;
        this.nombre = producto.name;
        this.iEfectivoAnual = producto.iEfectivoAnual;
        this.iMesVencido = ((((Math.pow((1 + (producto.iEfectivoAnual / 100)), (1 / 12))) - 1) * 12) * 100) / 12;
        this.iEfectivoAnualMax = producto.iEfectivoAnualMax;
        this.iMoraEfectivoAnual = producto.iMoraEfectivoAnual;
        this.valuemin = producto.valuemin;
        this.valuemax = producto.valuemax;
        this.termmin = producto.termmin;
        this.termmax = producto.termmax;
        this.valorSolicitado = producto.valuemin;
        this.plazo = producto.termmin;
        this.step = producto.step;
        this.administracion = producto.administracion;
        this.administracionp = producto.administracion;
        this.ivap = producto.iva;
        this.iva = (this.administracion / 100) * this.ivap;
        if (producto.aval) {
          this.avalp = producto.aval;
          this.aval = (this.valorSolicitado / 100) * this.avalp;
        }
        if (producto.parqueadero) { this.parqueadero = producto.parqueadero; }
        if (producto.peritaje) { this.peritaje = producto.peritaje; }
        if (producto.registroSimit) { this.registroSimit = producto.registroSimit; }
        if (producto.gmfCuatroxMil) { this.gmfCuatroxMil = producto.gmfCuatroxMil; }

        if (producto.comisionAdminHipo) { this.comisionAdminHipo = producto.comisionAdminHipo; }
        if (producto.excedenteComisionAdminHipo) { this.excedenteComisionAdminHipo = producto.excedenteComisionAdminHipo; }
        if (producto.registroHipoteca) { this.registroHipoteca = producto.registroHipoteca; }
        if (producto.interesesAnticipados) {
          this.interesesAnticipadosp = producto.interesesAnticipados;
          this.interesesAnticipados = (this.valorSolicitado / 100) * this.interesesAnticipadosp;
        }



        this.formularioSolicitud.patchValue({ value: producto.valuemin });
        this.formularioSolicitud.patchValue({ time: producto.termmin });


        this.valorConsignar = this.valorSolicitado - this.registroSimit - this.peritaje - this.parqueadero - this.comisionAdminHipo1 - this.registroHipoteca - this.interesesAnticipados;

        if (this.nombre === 'Prestamo Personal') {
          this.totalPersonal = ((this.aval + this.administracion + this.iva) / this.plazo);
          this.soloInteres = (this.valorCuotaBase as number * this.plazo) - this.valorSolicitado;
          this.valorCuotaTotal = this.valorCuotaBase as number + this.totalPersonal;
          this.totalCredito = this.valorCuotaBase as number + this.administracion + this.iva + this.aval;
        } else {
          this.soloInteres = 0;
          this.valorCuotaTotal = this.valorCuotaBase as number + this.iva + this.aval + this.administracion;
          this.totalCredito = 0;
        }


      });
    });



    this.formularioSolicitud.get('value')?.valueChanges.subscribe((value) => {
      this.valorSolicitado = value;
      var im = this.iMesVencido / 100;
      var im2 = Math.pow((1 + im), -(this.plazo));
      const a = (this.valorSolicitado * im) / (1 - im2);
      this.valorCuotaBase = a;
      // this.valorCuotaBase = a.toFixed(2);
      if (this.comisionAdminHipo !== 0 && this.valorSolicitado > 50000000 && this.comisionAdminHipo !== 0) {
        let diferencia = ((this.valorSolicitado - 50000000) / 1000000) * this.excedenteComisionAdminHipo;
        this.comisionAdminHipo1 = this.comisionAdminHipo + diferencia;
      } else if (this.comisionAdminHipo !== 0) {
        this.comisionAdminHipo1 = 2000000;
      }
      this.aval = (this.valorSolicitado / 100) * this.avalp;
      this.interesesAnticipados = (this.valorSolicitado / 100) * this.interesesAnticipadosp;
      this.valorConsignar =
        this.valorSolicitado -
        (this.registroSimit +
          this.peritaje +
          this.parqueadero +
          this.comisionAdminHipo1 +
          this.registroHipoteca +
          this.interesesAnticipados);


      if (this.nombre === 'Prestamo Personal') {
        this.totalPersonal = ((this.aval + this.administracion + this.iva) / this.plazo);
        this.soloInteres = (this.valorCuotaBase as number * this.plazo) - this.valorSolicitado;
        this.valorCuotaTotal = this.valorCuotaBase as number + this.totalPersonal;
        this.totalCredito = this.valorSolicitado + this.soloInteres + this.administracion + this.iva + this.aval;
      } else {
        this.soloInteres = 0;
        this.totalCredito = 0;
        this.valorCuotaTotal = this.valorCuotaBase as number + this.iva + this.aval + this.administracion;
      }

    });



    this.formularioSolicitud.get('time')?.valueChanges.subscribe((time) => {
      this.plazo = time;
      this.administracion = this.administracionp;
      if (this.nombre === 'Prestamo Personal') {
        this.administracion = this.administracion * this.plazo;
        this.iva = (this.administracion / 100) * this.ivap;

      }
      var im = this.iMesVencido / 100;
      var im2 = Math.pow((1 + im), -(this.plazo));
      let a = (this.valorSolicitado * im) / (1 - im2);
      this.valorCuotaBase = a;
      // console.log("Cuota + Interes: " + this.valorCuotaBase, 'Valor: $', this.valorSolicitado, 'Interes:', this.iMesVencido, '%', 'Plazo:', this.plazo);

      if (this.nombre === 'Prestamo Personal') {
        this.totalPersonal = ((this.aval + this.administracion + this.iva) / this.plazo);
        this.soloInteres = (this.valorCuotaBase as number * this.plazo) - this.valorSolicitado;
        this.valorCuotaTotal = this.valorCuotaBase as number + this.totalPersonal;
        this.totalCredito = this.valorSolicitado + this.soloInteres + this.administracion + this.iva + this.aval;
      } else {
        this.valorCuotaTotal = this.valorCuotaBase as number + this.iva + this.aval + this.administracion;
        this.soloInteres = 0;
        this.totalCredito = 0;
      }


    });


    this.formularioSolicitud.get('idUser')?.disable();
  }






  campoEsValido(campo: string): any {
    return (
      this.formularioSolicitud.controls[campo].errors &&
      this.formularioSolicitud.controls[campo].touched
    );
  }

  guardar(): void {
    if (this.formularioSolicitud.invalid) {
      // tslint:disable-next-line: no-unused-expression
      this.formularioSolicitud.markAllAsTouched;
      Swal.fire({
        title: 'Error',
        text: 'Selecciona El Tipo De Prestamo',
        icon: 'error',
      });
      return;
    }
    const idP = this.formularioSolicitud.controls.idProduct.value;
    this.productService.getProductById(idP).subscribe((resp) => {
      if (resp.regInmueble === true) { this.formularioSolicitud.controls.regInmueble.setValue(true); }
      if (resp.regPersonales === true) { this.formularioSolicitud.controls.regPersonales.setValue(true); }
      if (resp.regTrabajo === true) { this.formularioSolicitud.controls.regTrabajo.setValue(true); }
      if (resp.regVehiculo === true) { this.formularioSolicitud.controls.regVehiculo.setValue(true); }
      if (resp.regReferencias === true) { this.formularioSolicitud.controls.regReferencias.setValue(true); }
      if (resp.regReferenciasCom === true) { this.formularioSolicitud.controls.regReferenciasCom.setValue(true); }
      if (resp.regCedula === true) { this.formularioSolicitud.controls.regCedula.setValue(true); }
      if (resp.regPasaporte === true) { this.formularioSolicitud.controls.regPasaporte.setValue(true); }
      if (resp.regTarjetav === true) { this.formularioSolicitud.controls.regTarjetav.setValue(true); }
      if (resp.regMatricula === true) { this.formularioSolicitud.controls.regMatricula.setValue(true); }
      if (resp.regExtracto === true) { this.formularioSolicitud.controls.regExtracto.setValue(true); }
      this.formularioSolicitud.get('idUser')?.enable();
      this.requestService.createRequest(this.formularioSolicitud.value).subscribe(
        (resp2) => {
          this.formularioSolicitud.reset();
          this.authService.updateSolicitudUserById(resp2.idUser, resp2._id).subscribe();
          if (this.productos) {
            this.router.navigate(['/dashboard/misolicitud']);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}
