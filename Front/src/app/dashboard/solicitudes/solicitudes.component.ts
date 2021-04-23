import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

import { Product } from '../../models/product.models';
import { Requestx } from '../../models/request.models';
import { ProductService } from '../services/product.service';
import { RequestService } from '../services/request.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss'],
})

export class SolicitudesComponent implements OnInit {
  suscription!: Subscription;
  solicitudes: Requestx[] = [];
  solicitudesDocCom: Requestx[] = [];
  solicitudesAprobadas: Requestx[] = [];
  solicitudesRechazadas: Requestx[] = [];
  productos: Product[] = [];
  usuario: any = [];
  page1 = 0;
  page2 = 0;
  page3 = 0;
  search1 = '';
  search2 = '';
  search3 = '';
  hayerror = false;
  constructor(
    private router: Router,
    private requestService: RequestService,
    private productService: ProductService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.requestService.getRequests().subscribe(
      (resp) => {
        this.solicitudes = resp;
        this.solicitudes.forEach(solicitud => {
          if (solicitud.estate === 'Completo') {
            this.solicitudesDocCom.push(solicitud);
          }
          if (solicitud.estate === 'Aprobada') {
            this.solicitudesAprobadas.push(solicitud);
          }
          if (solicitud.estate === 'Rechazada') {
            this.solicitudesRechazadas.push(solicitud);
          }
        });
      });

    this.productService.getProducts().subscribe(
      (resp) => {
        this.productos = resp;
      });
    this.suscription = this.requestService.refresh$.subscribe(() => {
      this.ngOnInit();
    });
  }

  cambiarEstado(solicitudElegida: any, estado: any): void {
    const estadoTemp = solicitudElegida.estate;
    solicitudElegida.estate = estado;
    this.requestService.updateRequestsById(solicitudElegida).subscribe(
      (res) => {
        solicitudElegida.estate = estado;
        this.solicitudes = [];
        this.solicitudesAprobadas = [];
        this.solicitudesDocCom = [];
        this.solicitudesRechazadas = [];
        this.ngOnInit();
      },
      (err) => {
        console.log(err);
        solicitudElegida.estate = estadoTemp;
      }
    );
  }

  deleteRequest(idRequest: any): void {
    this.requestService.deleteRequestById(idRequest).subscribe(
      (res) => {
        const index = this.solicitudes.indexOf(idRequest);
        if (index > -1) {
          this.solicitudes.splice(index, 1);
        }
        Swal.fire({
          title: 'OK',
          text: 'Solicitud Borrada',
          icon: 'success',
        });
      },
      (err) => {
        console.log(err);
        Swal.fire({
          title: 'Error',
          text: err.error.msg,
          icon: 'error',
        });
      }
    );
  }

  verUsuario(solicitud: any): void {
    console.log(this.usuario);
    this.userService.getUserById(solicitud.idUser)
    .subscribe(resp => {
        this.usuario = resp;
      // console.log(this.usuario);
      }, (err) => {
        this.hayerror = true;
      });
  }

  noMostrarUsuario(): void {
    this.usuario = [];
  }

  nextPage(n: number): void {
    if (n === 1) { this.page1 += 5; }
    if (n === 2) { this.page2 += 5; }
    if (n === 3) { this.page3 += 5; }
  }
  prevPage(n: number): void {
    if (this.page1 > 0) { if (n === 1) { this.page1 -= 5; } }
    if (this.page2 > 0) { if (n === 2) { this.page2 -= 5; } }
    if (this.page3 > 0) { if (n === 3) { this.page3 -= 5; } }
  }
  searchSolicitud(valueSearch: string, n: number): void {
    if (n === 1) {
      this.page1 = 0;
      this.search1 = valueSearch;
    }
    if (n === 2) {
      this.page2 = 0;
      this.search2 = valueSearch;
    }
    if (n === 3) {
      this.page3 = 0;
      this.search3 = valueSearch;
    }
  }
}
