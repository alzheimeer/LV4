import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

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
  selector: 'app-misolicitud',
  templateUrl: './misolicitud.component.html',
  styleUrls: ['./misolicitud.component.scss'],
})
export class MisolicitudComponent implements OnInit {
  suscription!: Subscription;
  file!: File;
  photoSeleted?: any | ArrayBuffer;

  requests: Requestx[] = [];
  numrequests = 0;
  productos: Product[] = [];
  usuarioTest!: User;
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
  flaq = 0;
  allOk = 0;
  regAllOk = false;
  buttonSelect0 = false;
  buttonSelect1 = false;
  buttonSelect2 = false;
  buttonSelect3 = false;
  buttonSelect4 = false;
  MAXIMO_TAMANIO_BYTES = 4000000; // 1MB = 1 millón de bytes

  get usuario(): any {
    return this.authService.usuario;
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private requestService: RequestService,
    private productService: ProductService,
    private userService: UserService
  ) {

  }



  ngOnInit(): void {
    this.requestService.getRequestByIdUser(this.usuario.uid)
      .subscribe((resp1) => {
        this.requests = resp1;
        this.regAllOk = resp1[0].regOk;
        this.numrequests = this.requests.length;
        if (resp1[0].regInmueble === true) { this.regInmueble = true; }
        if (resp1[0].regPersonales === true) { this.regPersonales = true; }
        if (resp1[0].regTrabajo === true) { this.regTrabajo = true; }
        if (resp1[0].regVehiculo === true) { this.regVehiculo = true; }
        if (resp1[0].regReferencias === true) { this.regReferencias = true; }
        if (resp1[0].regReferenciasCom === true) { this.regReferenciasCom = true; }
        if (resp1[0].regCedula === true) { this.regCedula = true; }
        if (resp1[0].regPasaporte === true) { this.regPasaporte = true; }
        if (resp1[0].regTarjetav === true) { this.regTarjetav = true; }
        if (resp1[0].regMatricula === true) { this.regMatricula = true; }
        if (resp1[0].regExtracto === true) { this.regExtracto = true; }

        this.productService.getProducts().subscribe((res) => this.productos = res);
        this.userService.getUserById(this.usuario.uid).subscribe((r) => {
          this.usuarioTest = r;
          this.verificarUsuarioProp();
          this.verificarallOk();
        });
      });
    this.suscription = this.userService.refresh$.subscribe(() => this.ngOnInit());
    this.suscription = this.requestService.refresh$.subscribe(() => this.ngOnInit());
  }

  verificarUsuarioProp(): void {
    if (this.usuarioTest.personal.ciudad) {
      const body: any = { _id: this.requests[0]._id, regPersonalesOk: true };
      this.requestService.updateRequestsById(body).subscribe();
      this.user = this.usuarioTest.personal.numdoc;
    } else {
      const body: any = { _id: this.requests[0]._id, regPersonalesOk: false };
      this.requestService.updateRequestsById(body).subscribe();
      this.user = 0;
    }
    if (this.usuarioTest.cedulaPath || this.usuarioTest.pasaportePath) {
      const body: any = { _id: this.requests[0]._id, regCedulaOk: true, regPasaporteOk: true };
      this.requestService.updateRequestsById(body).subscribe();
    } else {
      const body: any = { _id: this.requests[0]._id, regCedulaOk: false, regPasaporteOk: false };
      this.requestService.updateRequestsById(body).subscribe();
    }
    if (this.requests[0].tarjetavPath) {
      const body: any = { _id: this.requests[0]._id, regTarjetavOk: true };
      this.requestService.updateRequestsById(body).subscribe();
    } else {
      const body: any = { _id: this.requests[0]._id, regTarjetavOk: false };
      this.requestService.updateRequestsById(body).subscribe();
    }
    if (this.requests[0].matriculaPath) {
      const body: any = { _id: this.requests[0]._id, regMatriculaOk: true };
      this.requestService.updateRequestsById(body).subscribe();
    } else {
      const body: any = { _id: this.requests[0]._id, regMatriculaOk: false };
      this.requestService.updateRequestsById(body).subscribe();
    }
    if (this.requests[0].extractoPath) {
      const body: any = { _id: this.requests[0]._id, regExtractoOk: true };
      this.requestService.updateRequestsById(body).subscribe();
    } else {
      const body: any = { _id: this.requests[0]._id, regExtractoOk: false };
      this.requestService.updateRequestsById(body).subscribe();
    }
  }

  verificarallOk(): void {
    if (this.requests[0].estate !== 'Completo') {
      this.flaq = 0;
      this.allOk = 0;
      // Verificamos si Todo Esta OK
      if (this.flaq === 0 && this.requests[0].regInmueble === true && this.requests[0].regInmuebleOk === true) {
        this.allOk = 1;
      }
      if (this.flaq === 0 && this.requests[0].regInmueble === true && this.requests[0].regInmuebleOk === false) {
        this.allOk = 0;
        this.flaq = 1;
      }
      if (this.flaq === 0 && this.requests[0].regPersonales === true && this.requests[0].regPersonalesOk === true) {
        this.allOk = 1;
      }
      if (this.flaq === 0 && this.requests[0].regPersonales === true && this.requests[0].regPersonalesOk === false) {
        this.allOk = 0;
        this.flaq = 1;
      }
      if (this.flaq === 0 && this.requests[0].regVehiculo === true && this.requests[0].regVehiculoOk === true) {
        this.allOk = 1;
      }
      if (this.flaq === 0 && this.requests[0].regVehiculo === true && this.requests[0].regVehiculoOk === false) {
        this.allOk = 0;
        this.flaq = 1;
      }
      if (this.flaq === 0 && this.requests[0].regTrabajo === true && this.requests[0].regTrabajoOk === true) {
        this.allOk = 1;
      }
      if (this.flaq === 0 && this.requests[0].regTrabajo === true && this.requests[0].regTrabajoOk === false) {
        this.allOk = 0;
        this.flaq = 1;
      }
      if (this.flaq === 0 && this.requests[0].regReferencias === true && this.requests[0].regReferenciasOk === true) {
        this.allOk = 1;
      }
      if (this.flaq === 0 && this.requests[0].regReferencias === true && this.requests[0].regReferenciasOk === false) {
        this.allOk = 0;
        this.flaq = 1;
      }
      if (this.flaq === 0 && this.requests[0].regReferenciasCom === true && this.requests[0].regReferenciasComOk === true) {
        this.allOk = 1;
      }
      if (this.flaq === 0 && this.requests[0].regReferenciasCom === true && this.requests[0].regReferenciasComOk === false) {
        this.allOk = 0;
        this.flaq = 1;
      }
      if (this.flaq === 0 && this.requests[0].regCedula === true && this.requests[0].regCedulaOk === true) {
        this.allOk = 1;
      }
      if (this.flaq === 0 && this.requests[0].regCedula === true && this.requests[0].regCedulaOk === false) {
        this.allOk = 0;
        this.flaq = 1;
      }
      if (this.flaq === 0 && this.requests[0].regPasaporte === true && this.requests[0].regPasaporteOk === true) {
        this.allOk = 1;
      }
      if (this.flaq === 0 && this.requests[0].regPasaporte === true && this.requests[0].regPasaporteOk === false) {
        this.allOk = 0;
        this.flaq = 1;
      }
      if (this.flaq === 0 && this.requests[0].regTarjetav === true && this.requests[0].regTarjetavOk === true) {
        this.allOk = 1;
      }
      if (this.flaq === 0 && this.requests[0].regTarjetav === true && this.requests[0].regTarjetavOk === false) {
        this.allOk = 0;
        this.flaq = 1;
      }
      if (this.flaq === 0 && this.requests[0].regMatricula === true && this.requests[0].regMatriculaOk === true) {
        this.allOk = 1;
      }
      if (this.flaq === 0 && this.requests[0].regMatricula === true && this.requests[0].regMatriculaOk === false) {
        this.allOk = 0;
        this.flaq = 1;
      }
      if (this.flaq === 0 && this.requests[0].regExtracto === true && this.requests[0].regExtractoOk === true) {
        this.allOk = 1;
      }
      if (this.flaq === 0 && this.requests[0].regExtracto === true && this.requests[0].regExtractoOk === false) {
        this.allOk = 0;
        this.flaq = 1;
      }
      if (this.allOk === 1) {
        const body: any = { _id: this.requests[0]._id, regOk: true, estate: 'Completo' };
        this.requestService.updateRequestsById(body).subscribe(() => {
          this.ngOnInit();
        });
      } else {
        const body: any = { _id: this.requests[0]._id, regOk: false };
        this.requestService.updateRequestsById(body).subscribe();
      }
    }
  }

  OnPhotoSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.file = (event.target.files[0] as File);

      // image preview
      const reader = new FileReader();
      reader.onload = (e) => (this.photoSeleted = reader.result);
      reader.readAsDataURL(this.file);

    }
  }



  onDocSelected(event: any, tipo: string): void {
    if (tipo === 'cedula') {
      if (event.target.files && event.target.files[0]) {
        this.file = (event.target.files[0] as File);
        if (this.file.size > this.MAXIMO_TAMANIO_BYTES) {
          const tamanioEnMb = this.MAXIMO_TAMANIO_BYTES / 1000000;
          alert(`El tamaño máximo es ${tamanioEnMb} MB`);
          // Limpiar
          this.buttonSelect0 = false;
          return
        }
        if (!this.file) {
          this.buttonSelect0 = false;
        }
        else {
          this.buttonSelect0 = true;
        }
      }
    }
    if (tipo === 'pasaporte') {
      if (event.target.files && event.target.files[0]) {
        this.file = (event.target.files[0] as File);
        if (this.file.size > this.MAXIMO_TAMANIO_BYTES) {
          const tamanioEnMb = this.MAXIMO_TAMANIO_BYTES / 1000000;
          alert(`El tamaño máximo es ${tamanioEnMb} MB`);
          // Limpiar
          this.buttonSelect1 = false;
          return
        }
        if (!this.file) {
          this.buttonSelect1 = false;
        }
        else {
          this.buttonSelect1 = true;
        }
      }
    }
    if (tipo === 'tarjetav') {
      if (event.target.files && event.target.files[0]) {
        this.file = (event.target.files[0] as File);
        if (this.file.size > this.MAXIMO_TAMANIO_BYTES) {
          const tamanioEnMb = this.MAXIMO_TAMANIO_BYTES / 1000000;
          alert(`El tamaño máximo es ${tamanioEnMb} MB`);
          // Limpiar
          this.buttonSelect2 = false;
          return
        }
        if (!this.file) {
          this.buttonSelect2 = false;
        }
        else {
          this.buttonSelect2 = true;
        }
      }
    }
    if (tipo === 'matricula') {
      if (event.target.files && event.target.files[0]) {
        this.file = (event.target.files[0] as File);
        if (this.file.size > this.MAXIMO_TAMANIO_BYTES) {
          const tamanioEnMb = this.MAXIMO_TAMANIO_BYTES / 1000000;
          alert(`El tamaño máximo es ${tamanioEnMb} MB`);
          // Limpiar
          this.buttonSelect3 = false;
          return
        }
        if (!this.file) {
          this.buttonSelect3 = false;
        }
        else {
          this.buttonSelect3 = true;
        }
      }
    }
    if (tipo === 'extracto') {
      if (event.target.files && event.target.files[0]) {
        this.file = (event.target.files[0] as File);
        if (this.file.size > this.MAXIMO_TAMANIO_BYTES) {
          const tamanioEnMb = this.MAXIMO_TAMANIO_BYTES / 1000000;
          alert(`El tamaño máximo es ${tamanioEnMb} MB`);
          // Limpiar
          this.buttonSelect4 = false;
          return
        }
        if (!this.file) {
          this.buttonSelect4 = false;
        }
        else {
          this.buttonSelect4 = true;
        }
      }
    }
  }

  uploadPhoto(): void {
    this.userService
      .updateUserByIdPhoto(this.usuario.uid as string, this.file)
      .subscribe(
        (resp) => {
          Swal.fire({
            title: 'OK',
            text: 'Foto Actualizada',
            icon: 'success',
          });
        },
        (err) => {
          console.log(err);
        }
      );
  }

  uploadExtracto(tipo: string): void {
    if (tipo === 'cedula') {
      this.userService
        .updateUserByIdCedula(this.usuario.uid as string, this.file)
        .subscribe(() => this.docOk());
    }
    if (tipo === 'pasaporte') {
      this.userService
        .updateUserByIdPasaporte(this.usuario.uid as string, this.file)
        .subscribe(() => this.docOk());
    }
    if (tipo === 'tarjetav') {
      this.requestService
        .updateRequestsByIdTarjetav(this.requests[0]._id as string, this.file)
        .subscribe(() => this.docOk());
    }
    if (tipo === 'matricula') {
      this.requestService
        .updateRequestsByIdMatricula(this.requests[0]._id as string, this.file)
        .subscribe(() => this.docOk());
    }
    if (tipo === 'extracto') {
      this.requestService
        .updateRequestsByIdExtracto(this.requests[0]._id as string, this.file)
        .subscribe(() => this.docOk());
    }




  }

  docOk(): void {
    Swal.fire({
      title: 'OK',
      text: 'Documento Enviado',
      icon: 'success',
    });
  }

}
