import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

import { Product } from '../../models/product.models';
import { Requestx } from '../../models/request.models';
import { ProductService } from '../services/product.service';
import { RequestService } from '../services/request.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cartera',
  templateUrl: './cartera.component.html',
  styleUrls: ['./cartera.component.scss']
})
export class CarteraComponent implements OnInit {

  @ViewChild(MatAccordion)
  accordion!: MatAccordion;

  suscription!: Subscription;
  solicitudes: Requestx[] = [];
  // solicitudesDocCom: Requestx[] = [];
  solicitudesEnCobro: Requestx[] = [];
  productos: Product[] = [];
  usuario: any = [];
  page1 = 0;
  page2 = 0;
  page3 = 0;
  search1 = '';
  search2 = '';
  search3 = '';
  tiposearch = 'prod';
  hayerror = false;
  p = '';


  formularioResultado: FormGroup = this.fb.group({
    id: ['0', Validators.required],
    resultado: ['', Validators.required],
    calificacion: [0, Validators.required],
  });
  formularioCuenta: FormGroup = this.fb.group({
    id: ['', Validators.required],
    fechaConsignacion: ['', Validators.required]
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private requestService: RequestService,
    private productService: ProductService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.requestService.getRequests().subscribe(
      (resp) => {
        this.solicitudes = resp;
        this.solicitudes.forEach(solicitud => {
          // if (solicitud.estate === 'Completo') {
          //   this.solicitudesDocCom.push(solicitud);
          // }
          if (solicitud.estate === 'Facturacion') {
            this.solicitudesEnCobro.push(solicitud);
          }
          // if (solicitud.estate === 'Rechazada') {
          //   this.solicitudesRechazadas.push(solicitud);
          // }
        });
      });

    this.productService.getProducts().subscribe(
      (resp) => {
        this.productos = resp;
      });

    // this.suscription = this.requestService.refresh$.subscribe(() => {
    //   this.ngOnInit();
    // });
  }

  cambiarEstado(solicitudElegida: any, estado: any): void {
    const estadoTemp = solicitudElegida.estate;
    solicitudElegida.estate = estado;
    this.requestService.updateRequestsById(solicitudElegida).subscribe(
      (res) => {
        solicitudElegida.estate = estado;
        this.solicitudes = [];
        this.solicitudesEnCobro = [];
        // this.solicitudesDocCom = [];
        // this.solicitudesRechazadas = [];
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
  searchSolicitud(valueSearch: string, n: number, tipo: string): void {
    if (n === 1) {
      this.page1 = 0;
      this.search1 = valueSearch;
      this.tiposearch = tipo;
    }
    if (n === 2) {
      this.page2 = 0;
      this.search2 = valueSearch;
      this.tiposearch = tipo;
    }
    if (n === 3) {
      this.page3 = 0;
      this.search3 = valueSearch;
      this.tiposearch = tipo;
    }
  }

  enviarR(solicitud: string) {

    this.formularioResultado.controls.id.setValue(solicitud)
    if (this.formularioResultado.invalid) {
      this.formularioResultado.markAllAsTouched;
      Swal.fire({
        title: 'Error',
        text: 'Coloca el resultado y la calificacion',
        icon: 'error',
      });
      return;
    }
    const {
      id,
      resultado,
      calificacion,
    } = this.formularioResultado.value;
    this.requestService.updateRequestsByIdResultadoCalificacion(id, resultado, calificacion).subscribe(
      () => {
        this.solicitudes = [];
        this.solicitudesEnCobro = [];
        this.ngOnInit();
      }
    );
  }
  enviarCuenta(solicitud: Requestx) {
    let uid = solicitud._id;
    this.formularioCuenta.controls.id.setValue(uid)
    if (this.formularioCuenta.invalid) {
      this.formularioCuenta.markAllAsTouched;
      Swal.fire({
        title: 'Error',
        text: 'Coloca la fecha que se consigno',
        icon: 'error',
      });
      return;
    }
    const {
      id,
      fechaConsignacion
    } = this.formularioCuenta.value;

    let fecha: Date = fechaConsignacion;
    let plazo: number = solicitud.time;
    let dia: number = +((fecha.toString()).slice(8, 10));
    dia = dia;
    let mes: number = +(fecha.toString()).slice(5, 7);
    mes = mes;
    let año: number = +(fecha.toString()).slice(0, 4);

    if (dia > 28) {
      dia = 1;
      mes = mes + 1;
    }
    let fec = new Date(año, (mes - 1), dia, 0, 0, 0);
    let fechas = [];
    let estados = [];

    for (let i = 0; i < plazo; i++) {
      fec.setMonth(fec.getMonth() + 1);
      let x = fec.toDateString();
      fechas.push({ x: 'Pendiente' });
      estados.push('Pendiente');
    }


    this.requestService.updateRequestsByIdFechaConsignacion(id, fechaConsignacion, fechas).subscribe(
      (rta) => {
        this.solicitudes = [];
        // this.solicitudesAprobadas = [];
        // this.facturar(res);
        if (rta.fechasFacturacion.length >= 1) {
          Swal.fire({
            title: 'OK',
            text: 'Fechas De Facturacion Generadas',
            icon: 'success',
          });
          this.cambiarEstado(rta, 'Facturacion');
          this.ngOnInit();
        } else {
          alert('Fallo Grabando Fechas');
        }

      },
      (err) => {
        console.log(err);

      }
    );
  }
}
