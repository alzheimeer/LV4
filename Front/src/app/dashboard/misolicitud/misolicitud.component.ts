import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../auth/services/auth.service';
import { UserService } from '../../dashboard/services/user.service';
import { Product } from '../../models/product.models';
import { User } from '../../models/user.models';
import { DatosconstruccionComponent } from '../datosconstruccion/datosconstruccion.component';
import { ProductService } from '../services/product.service';
import { RequestService } from '../services/request.service';
import { Requestx } from './../../models/request.models';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}



@Component({
  selector: 'app-misolicitud',
  templateUrl: './misolicitud.component.html',
  styleUrls: ['./misolicitud.component.scss'],

})
export class MisolicitudComponent implements OnInit, OnChanges {
  @ViewChild('datosDesdeElPadre', { static: false }) datosDesdeElPadre: DatosconstruccionComponent | any;
  arrayPadre: number[];
  textoPadre: string;

  //File Preview and Upload
  file!: File;
  photoSeleted?: any | ArrayBuffer;

  requests: Requestx[] = [];
  numrequests = 0;
  productos: Product[] = [];
  usuarioTest!: User;
  user: any;
  regInmueble!: Boolean;
  regPersonales = false;
  regTrabajo = false;
  regVehiculo = false;
  regReferencias = false;
  regReferenciasCom = false;
  regCedula = false;
  regPasaporte = false;
  regTarjetav = false;
  regMatricula = false;
  regExtracto = false;

  get usuario() {
    return this.authService.usuario;
  }


  constructor(
    private router: Router,
    private authService: AuthService,
    private requestService: RequestService,
    private productService: ProductService,
    private userService: UserService,
  ) {
    this.arrayPadre = [];
    this.textoPadre = '';
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges was called! padre');
    console.log(changes);
  }


  ngOnInit(): void {
    console.log('ngOnInt se ejecuta')
    this.requestService
      .getRequestByIdUser(this.usuario.uid).subscribe((resp) => {
        this.requests = resp;
        this.numrequests = this.requests.length;
        this.productService.getProducts().subscribe((resp) => {
          this.productos = resp;
          this.productService.getProductById(this.requests[0].idProduct).subscribe((resp) => {
            console.log(resp)
            if (resp.regInmueble === true) { this.regInmueble = true; }
            if (resp.regPersonales === true) { this.regPersonales = true; }
            if (resp.regTrabajo === true) { this.regTrabajo = true; }
            if (resp.regVehiculo === true) { this.regVehiculo = true; }
            if (resp.regReferencias === true) { this.regReferencias = true; }
            if (resp.regReferenciasCom === true) { this.regReferenciasCom = true; }
            if (resp.regCedula === true) { this.regCedula = true; }
            if (resp.regPasaporte === true) { this.regPasaporte = true; }
            if (resp.regTarjetav === true) { this.regTarjetav = true; }
            if (resp.regMatricula === true) { this.regMatricula = true; }
            if (resp.regExtracto === true) { this.regExtracto = true; }

            });
        });
      });
    this.userService.getUserById(this.usuario.uid).subscribe((resp) => {
      this.usuarioTest = resp;
      this.user = resp.personal.numdoc;
      // if (resp.cedulaPath)
      //   this.regCedula = true;
      // if (resp.pasaportePath)
      //   this.regPasaporte = true;
      });

  }


  OnPhotoSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      //image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSeleted = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  OnDocSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];

    }
  }

  uploadPhoto() {
    this.arrayPadre = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.datosDesdeElPadre.estollegadelpadre = this.arrayPadre;

    this.userService.updateUserByIdPhoto(this.usuario.uid as string, this.file)
      .subscribe((resp) => {
        Swal.fire({
          title: 'OK',
          text: 'Foto Actualizada',
          icon: 'success',
        });
        console.log('deberia refrescar aqui')
        this.ngOnInit();
      }, (err) => {
        console.log(err);
      })
  }

  uploadExtracto(tipo: string) {
    if (tipo == 'cedula')
      this.userService.updateUserByIdCedula(this.usuario.uid as string, this.file).subscribe((resp) => this.docOk());
    if (tipo == 'pasaporte')
      this.userService.updateUserByIdPasaporte(this.usuario.uid as string, this.file).subscribe((resp) => this.docOk());
    if (tipo == 'tarjetav')
      this.requestService.updateRequestsByIdTarjetav(this.requests[0]._id as string, this.file).subscribe((resp) => this.docOk());
    if (tipo == 'matricula')
      this.requestService.updateRequestsByIdMatricula(this.requests[0]._id as string, this.file).subscribe((resp) => this.docOk());
    if (tipo == 'extracto')
      this.requestService.updateRequestsByIdExtracto(this.requests[0]._id as string, this.file).subscribe((resp) => this.docOk());

  }


  docOk() {
    Swal.fire({
      title: 'OK',
      text: 'Documento Enviado',
      icon: 'success',
    });
  }
}
