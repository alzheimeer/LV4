import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  target: HTMLInputElement & EventTarget
}




@Component({
  selector: 'app-datosconstruccion',
  templateUrl: './datosconstruccion.component.html',
  styleUrls: ['./datosconstruccion.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DatosconstruccionComponent implements OnInit {
  @Input() estollegadelpadre: any;
  //File Preview and Upload
  file!: File;
  photoSeleted?: any | ArrayBuffer;
  baseUrlN: string = environment.baseUrlN;

  requests: Requestx[] = [];
  numrequests = 0;
  productos: Product[] = [];
  usuarioTest: User | undefined;
  user: any;
  regInmueble!: Boolean;
  regPersonales = false;
  regTrabajo = false;
  regVehiculo = false;
  regReferencias = false;
  regReferenciasCom = false;
  x = '';
  get usuario() {
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
      .getRequestByIdUser(this.usuario.uid).subscribe((resp) => {
        this.requests = resp;
        this.numrequests = this.requests.length;
        this.productService.getProducts().subscribe((resp) => {
          this.productos = resp;
          this.productService.getProductById(this.requests[0].idProduct).subscribe((resp) => {
            if (resp.regInmueble === true) { this.regInmueble = true; }
            if (resp.regPersonales === true) { this.regPersonales = true; }
            if (resp.regTrabajo === true) { this.regTrabajo = true; }
            if (resp.regVehiculo === true) { this.regVehiculo = true; }
            if (resp.regReferencias === true) { this.regReferencias = true; }
            if (resp.regReferenciasCom === true) { this.regReferenciasCom = true; }
        });
      });
    });
    this.userService.getUserById(this.usuario.uid).subscribe((resp) => {
      this.usuarioTest = resp;
      this.x = resp.avatarPath;
      this.user = resp.personal.numdoc;
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

    this.userService.updateUserByIdPhoto(this.usuario.uid as string, this.file)
      .subscribe((resp) => {
        Swal.fire({
          title: 'OK',
          text: 'Foto Actualizada',
          icon: 'success',
        });
      }, (err) => {
        console.log(err);
      })
  }
  uploadExtracto() {

    this.userService.updateUserByIdPhoto(this.usuario.uid as string, this.file)
      .subscribe((resp) => {
        Swal.fire({
          title: 'OK',
          text: 'Foto Actualizada',
          icon: 'success',
        });
      }, (err) => {
        console.log(err);
      })
  }
}
