import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
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
export class MisolicitudComponent implements OnInit, AfterViewInit, OnDestroy {


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
  seguro = 0;
  seguro1 = 0;
  isScrolled = false;


  get usuario(): any {
    return this.authService.usuario;
  }

  @HostListener("scroll", ['$event'])
  doSomethingOnWindowsScroll($event: any) {
    console.log('w')
    let scrollOffset = $event.srcElement.children[0].scrollTop;
    console.log("window scroll: ", scrollOffset);
  }


  constructor(
    private router: Router,
    private authService: AuthService,
    private requestService: RequestService,
    private productService: ProductService,
    private userService: UserService
  ) {
    console.log('Inicia CONSTRUCTOR');
    this.requestService.getRequestByIdUser(this.usuario.uid).subscribe((resp) => {
      console.log('OBTIENE SOLICITUD CONSTRUCTOR');
      this.requests = resp;
    }, (err) => {
      this.router.navigate(['/dashboard/solicitud']);
    });
    this.userService.getUserById(this.usuario.uid).subscribe((usuario) => {
      console.log('OBTIENE USUARIO CONSTRUCTOR');
      this.usuarioTest = usuario;
    });
    // Traemos Todos Los Producto Y Los Guardamos En la Variable productos
    this.productService.getProducts().subscribe((productos) => {
      console.log('OBTIENE PRODUCTOS CONSTRUCTOR');
      this.productos = productos;
    });
  }

  scroll(event: any): void {
    const number = event.srcElement.scrollTop;
    // console.log(event);
    console.log(number);
    event.srcElement.scrollTop >= 100 ? (this.isScrolled = true) : (this.isScrolled = false);
    console.log(screenTop)
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scroll, true);
  }

  pepe() {
    console.log('Ancho', window.top, window.innerWidth);
    console.log('Alto', window.innerHeight);
    console.log('scroll', window.outerHeight);

    // setTimeout(() => window.scroll(0, 0), 0);
    window.scrollTo(0, 1000);
    window.scroll(0, 0);
    // this.requestService.updateRequestsByIdMiSolicitud(this.requests[0]).subscribe(() => {
    //   this.docOk();

    // });
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);


    console.log('Inicio - OnInit');
    this.requestService.getRequestByIdUser(this.usuario.uid).subscribe((solicitudes) => {
      console.log('Obtiene Usuario - OnInit');
      this.requests = solicitudes;
      this.numrequests = this.requests.length;
      // Setea Los requisitos actuales de la solicitud

      // Si el usuario ya tiene cedula o pasaporte colocmos la bandera en OK
      if (this.requests[0].regCedulaOk === false || solicitudes[0].regPasaporteOk === false) {
        if (this.usuarioTest.cedulaPath || this.usuarioTest.pasaportePath) {
          console.log('Entro a bandera cedula o pasaporte OK  - OnInit');
          const body: any = { _id: solicitudes[0]._id, regCedulaOk: true, regPasaporteOk: true };
          this.requestService.updateRequestsById(body).subscribe(() => this.ngOnInit());
        }
      }
      // Si el usurio ya tiene datos Personales Colocamos la bandera en OK
      if (solicitudes[0].regPersonalesOk === false) {
        if (this.usuarioTest.personal.direccion) {
          console.log('Entro a bandera PersonalesOk - OnInit');
          const body: any = { _id: solicitudes[0]._id, regPersonalesOk: true };
          this.requestService.updateRequestsById(body).subscribe(() => this.ngOnInit());
        }
      }
      this.setReq(solicitudes[0]);
      this.verificarallOk(solicitudes[0]);
    }, (err) => {
      console.log('Usuario No Tiene Solicitudes Aun');
    });
    if (this.seguro1 === 0) {
      // Implementaciones para refrescar este componente
      this.suscription = this.userService.refresh$.subscribe(() => {
        this.userService.getUserById(this.usuario.uid).subscribe((usuario) => {
          console.log('REFRESH OBTIENE USUARIO  - OnInit');
          this.usuarioTest = usuario;
          this.seguro1 = 1;
          this.ngOnInit();
        });
      });
  }
    if (this.seguro === 0) {
      this.suscription = this.requestService.refresh$.subscribe((res) => {
        console.log('REFRESH REQUEST  - OnInit', res);
        this.seguro = 1;
        this.ngOnInit();
      });
    }

  }


  setReq(solicitud: Requestx): void {
    console.log('seteo variables')
    this.regAllOk = solicitud.regOk;
    this.regInmueble = solicitud.regInmueble;
    this.regPersonales = solicitud.regPersonales;
    this.regTrabajo = solicitud.regTrabajo;
    this.regVehiculo = solicitud.regVehiculo;
    this.regReferencias = solicitud.regReferencias;
    this.regReferenciasCom = solicitud.regReferenciasCom;
    this.regCedula = solicitud.regCedula;
    this.regPasaporte = solicitud.regPasaporte;
    this.regTarjetav = solicitud.regTarjetav;
    this.regMatricula = solicitud.regMatricula;
    this.regExtracto = solicitud.regExtracto;
  }


  verificarallOk(solicitud: Requestx): void {
    // Verificamos si ya todos los requisitos se completaron Y cambiamos estado a Completo
    if (solicitud.estate !== 'Completo') {
      this.flaq = 0;
      this.allOk = 0;

      // Verificamos si Todo Esta OK
      if (this.flaq === 0 && solicitud.regInmueble === true && solicitud.regInmuebleOk === true) { this.allOk = 1; }
      if (this.flaq === 0 && solicitud.regInmueble === true && solicitud.regInmuebleOk === false) { this.allOk = 0; this.flaq = 1; }
      if (this.flaq === 0 && solicitud.regPersonales === true && solicitud.regPersonalesOk === true) { this.allOk = 1; }
      if (this.flaq === 0 && solicitud.regPersonales === true && solicitud.regPersonalesOk === false) { this.allOk = 0; this.flaq = 1; }
      if (this.flaq === 0 && solicitud.regVehiculo === true && solicitud.regVehiculoOk === true) { this.allOk = 1; }
      if (this.flaq === 0 && solicitud.regVehiculo === true && solicitud.regVehiculoOk === false) { this.allOk = 0; this.flaq = 1; }
      if (this.flaq === 0 && solicitud.regTrabajo === true && solicitud.regTrabajoOk === true) { this.allOk = 1; }
      if (this.flaq === 0 && solicitud.regTrabajo === true && solicitud.regTrabajoOk === false) { this.allOk = 0; this.flaq = 1; }
      if (this.flaq === 0 && solicitud.regReferencias === true && solicitud.regReferenciasOk === true) { this.allOk = 1; }
      if (this.flaq === 0 && solicitud.regReferencias === true && solicitud.regReferenciasOk === false) { this.allOk = 0; this.flaq = 1; }
      if (this.flaq === 0 && solicitud.regReferenciasCom === true && solicitud.regReferenciasComOk === true) { this.allOk = 1; }
      if (this.flaq === 0 && solicitud.regReferenciasCom === true && solicitud.regReferenciasComOk === false) { this.allOk = 0; this.flaq = 1; }
      if (this.flaq === 0 && solicitud.regCedula === true && solicitud.regCedulaOk === true) { this.allOk = 1; }
      if (this.flaq === 0 && solicitud.regCedula === true && solicitud.regCedulaOk === false) { this.allOk = 0; this.flaq = 1; }
      if (this.flaq === 0 && solicitud.regPasaporte === true && solicitud.regPasaporteOk === true) { this.allOk = 1; }
      if (this.flaq === 0 && solicitud.regPasaporte === true && solicitud.regPasaporteOk === false) { this.allOk = 0; this.flaq = 1; }
      if (this.flaq === 0 && solicitud.regTarjetav === true && solicitud.regTarjetavOk === true) { this.allOk = 1; }
      if (this.flaq === 0 && solicitud.regTarjetav === true && solicitud.regTarjetavOk === false) { this.allOk = 0; this.flaq = 1; }
      if (this.flaq === 0 && solicitud.regMatricula === true && solicitud.regMatriculaOk === true) { this.allOk = 1; }
      if (this.flaq === 0 && solicitud.regMatricula === true && solicitud.regMatriculaOk === false) { this.allOk = 0; this.flaq = 1; }
      if (this.flaq === 0 && solicitud.regExtracto === true && solicitud.regExtractoOk === true) { this.allOk = 1; }
      if (this.flaq === 0 && solicitud.regExtracto === true && solicitud.regExtractoOk === false) { this.allOk = 0; this.flaq = 1; }
      console.log('Verifica todoOk');
      // Si cumple Cambiamos la bandera principal
      if (this.allOk === 1) {
        const body: any = { _id: solicitud._id, regOk: true, estate: 'Completo' };
        this.requestService.updateRequestsByIdMiSolicitud(body).subscribe(() => {
          this.ngOnInit();
        });
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
          return;
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
          return;
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
          return;
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
          return;
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
          return;
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
    console.log('ENVIA FOTO');
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
    console.log('SSUBE DOC');
    if (tipo === 'cedula') {
      this.userService.updateUserByIdCedula(this.usuario.uid as string, this.file).subscribe(() => {
        const body: any = { _id: this.requests[0]._id, regCedulaOk: true, regPasaporteOk: true };
        this.requestService.updateRequestsByIdMiSolicitud(body).subscribe(() => {
          this.docOk();
          this.ngOnInit();
        });
      });
    }
    if (tipo === 'pasaporte') {
      this.userService.updateUserByIdPasaporte(this.usuario.uid as string, this.file).subscribe(() => {
        const body: any = { _id: this.requests[0]._id, regCedulaOk: true, regPasaporteOk: true };
        this.requestService.updateRequestsByIdMiSolicitud(body).subscribe(() => {
          this.docOk();
          this.ngOnInit();
        });
      });
    }
    if (tipo === 'tarjetav') {
      this.requestService.updateRequestsByIdTarjetav(this.requests[0]._id as string, this.file).subscribe(() => {

        this.docOk();
        this.ngOnInit();

      });
    }

    if (tipo === 'matricula') {
      this.requestService.updateRequestsByIdMatricula(this.requests[0]._id as string, this.file).subscribe(() => {

        this.docOk();
        this.ngOnInit();

      });
    }

    if (tipo === 'extracto') {
      this.requestService.updateRequestsByIdExtracto(this.requests[0]._id as string, this.file).subscribe(() => {

        this.docOk();
        this.ngOnInit();

      });
    }
  }

  docOk(): void {
    Swal.fire({
      title: 'OK',
      text: 'Documento Enviado',
      icon: 'success',
    });
  }

  /*  ngOnDestroy() {
     this.xxx.unsubscribe();
   } */

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

}
