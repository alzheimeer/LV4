import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

import { environment } from '../../../environments/environment';
import { AuthService } from '../../auth/services/auth.service';
import { UserService } from '../../dashboard/services/user.service';
import { Product } from '../../models/product.models';
import { User } from '../../models/user.models';
import { ProductService } from '../services/product.service';
import { RequestService } from '../services/request.service';
import { Requestx } from './../../models/request.models';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-datosconstruccion',
  templateUrl: './datosconstruccion.component.html',
  styleUrls: ['./datosconstruccion.component.scss']
})
export class DatosconstruccionComponent implements OnInit {
  suscription!: Subscription;
  file!: File;
  photoSeleted?: any | ArrayBuffer;
  baseUrlN: string = environment.baseUrlN;

  requests: Requestx[] = [];
  numrequests = 0;
  productos: Product[] = [];
  usuarioTest: User | undefined;
  user: any;
  regInmueble!: boolean;
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
  regCamaraCom = false;
  regRut = false;
  regEstudioObra = false;
  regProgramaObra = false;
  regCuraduria = false;
  regLicenciaConst = false;
  avatar = '';
  cedula = '';
  pasaporte = '';
  tarjetav = '';
  matricula = '';
  extracto = '';
  CamaraCom = '';
  Rut = '';
  EstudioObra = '';
  ProgramaObra = '';
  Curaduria = '';
  LicenciaConst = '';
  buttonSelect = false;
  MAXIMO_TAMANIO_BYTES = 2000000; // 1MB = 1 millón de bytes
  seguro = 0;
  seguro1 = 0;
  get usuario(): any {
    return this.authService.usuario;
  }



  constructor(
    private router: Router,
    private authService: AuthService,
    private requestService: RequestService,
    private productService: ProductService,
    private userService: UserService,

  ) { }




  ngOnInit(): void {
    this.requestService
      .getRequestByIdUser(this.usuario.uid).subscribe((res) => {
        // console.log('cambios');
        this.requests = res;
        this.tarjetav = res[0].tarjetavPath;
        this.matricula = res[0].matriculaPath;
        this.extracto = res[0].extractoPath;
        this.CamaraCom = res[0].CamaraComPath;
        this.Rut = res[0].RutPath;
        this.EstudioObra = res[0].EstudioObraPath;
        this.ProgramaObra = res[0].ProgramaObraPath;
        this.Curaduria = res[0].CuraduriaPath;
        this.LicenciaConst = res[0].LicenciaConstPath;
        this.numrequests = this.requests.length;
        this.productService.getProducts().subscribe((r) => {
          this.productos = r;
          this.productService.getProductById(this.requests[0].idProduct).subscribe((resp) => {
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
            if (resp.regCamaraCom === true) { this.regCamaraCom = true; }
            if (resp.regRut === true) { this.regRut = true; }
            if (resp.regEstudioObra === true) { this.regEstudioObra = true; }
            if (resp.regProgramaObra === true) { this.regProgramaObra = true; }
            if (resp.regCuraduria === true) { this.regCuraduria = true; }
            if (resp.regLicenciaConst === true) { this.regLicenciaConst = true; }
        });
      });
    });
    this.userService.getUserById(this.usuario.uid).subscribe((resp) => {
      this.usuarioTest = resp;
      this.avatar = resp.avatarPath;
      this.cedula = resp.cedulaPath;
      this.pasaporte = resp.pasaportePath;
      this.user = resp.personal.numdoc;
    });
    if (this.seguro === 0) {
      this.suscription = this.userService.refresh$.subscribe(() => {
        this.ngOnInit();
    });
    }
    if (this.seguro1 === 0) {
      this.suscription = this.requestService.refresh$.subscribe(() => {
        this.ngOnInit();
    });
  }
  }

  OnPhotoSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.file = (event.target.files[0] as File);
      if (this.file.size > this.MAXIMO_TAMANIO_BYTES) {
        const tamanioEnMb = this.MAXIMO_TAMANIO_BYTES / 1000000;
        alert(`El tamaño máximo es ${tamanioEnMb} MB Con Tamaño 130x130 px`);
        // Limpiar
        this.buttonSelect = false;
        return
      }
      this.buttonSelect = true;
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSeleted = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  OnDocSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.file = (event.target.files[0] as File);
    }
  }

  uploadPhoto(): void {
    this.userService.updateUserByIdPhoto(this.usuario.uid as string, this.file)
      .subscribe((resp) => {
        Swal.fire({
          title: 'OK',
          text: 'Foto Actualizada',
          icon: 'success',
        });
        this.buttonSelect = false;
      }, (err) => {
        console.log(err);
      });
  }

  uploadExtracto(): void {
    this.userService.updateUserByIdPhoto(this.usuario.uid as string, this.file)
      .subscribe((resp) => {
        Swal.fire({
          title: 'OK',
          text: 'Foto Actualizada',
          icon: 'success',
        });
        this.buttonSelect = false;
      }, (err) => {
        console.log(err);
      });
  }
}
