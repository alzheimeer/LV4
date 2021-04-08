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
      .getRequestByIdUser(this.usuario.uid)
      .subscribe((resp) => {
        this.requests = resp;
        this.numrequests = this.requests.length;
        // console.log(this.numrequests);
      });

    this.productService
    .getProducts()
    .subscribe((resp) => {
        this.productos = resp;
      });

    this.userService.getUserById(this.usuario.uid).subscribe((resp) => {
      console.log('resp:', resp.personal.numdoc);
      this.user = resp.personal.numdoc;
      });

  }
}
