import { Requestx } from './../../models/request.models';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { UserService } from '../../dashboard/services/user.service';
import { ProductService } from '../services/product.service';
import { RequestService } from '../services/request.service';
import { Product } from '../../models/product.models';

@Component({
  selector: 'app-misolicitud',
  templateUrl: './misolicitud.component.html',
  styleUrls: ['./misolicitud.component.scss'],
})
export class MisolicitudComponent implements OnInit {
  requests: Requestx[] = [];
  numrequests = 0;
  productos: Product[] = [];
  user: any;
  regInmueble!: Boolean;
  regPersonales = false;
  regTrabajo = false;
  regVehiculo = false;
  regReferencias = false;
  regReferenciasCom = false;

  get usuario() {
    return this.authService.usuario;
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private requestService: RequestService,
    private productService: ProductService,
    private userService: UserService,
  ) {}

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
      this.user = resp.personal.numdoc;
      });
  }
}
