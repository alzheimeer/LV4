import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product.models';
import Swal from 'sweetalert2';
import { Requestx } from '../../models/request.models';
import { ProductService } from '../services/product.service';
import { RequestService } from '../services/request.service';
import { User } from 'src/app/models/user.models';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss'],
})
export class SolicitudesComponent implements OnInit {
  constructor(
    private router: Router,
    private requestService: RequestService,
    private productService: ProductService,
    private userService: UserService,
  ) {}

  public solicitudes: Requestx[] = [];
  public productos: Product[] = [];
  public usuario: any = [];
  hayerror = false;

  ngOnInit(): void {
    this.requestService.getRequests().subscribe(
      (resp) => {
        this.solicitudes = resp;
      });

    this.productService.getProducts().subscribe(
      (resp) => {
        this.productos = resp;
      });
  }

  cambiarEstado(solicitudElegida: any, estado: any) {
    const estadoTemp = solicitudElegida.estate;
    solicitudElegida.estate = estado;
    this.requestService.updateRequestsById(solicitudElegida).subscribe(
      (res) => {
        solicitudElegida.estate = estado;
      },
      (err) => {
        console.log(err);
        solicitudElegida.estate = estadoTemp;
      }
    );
  }

  deleteRequest(idRequest: any) {
    this.requestService.deleteRequestById(idRequest).subscribe(
      (res) => {
        const index = this.solicitudes.indexOf(idRequest);
        //if is ok delete return -1
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

  verUsuario(solicitud:any){
    console.log(this.usuario)
    this.userService.getUserById(solicitud.idUser)

    .subscribe(resp => {
        this.usuario = resp;
        console.log(this.usuario)
      }, (err) => {
        this.hayerror = true;
      });
  }
  noMostrarUsuario(){
    this.usuario = [];
  }
}
