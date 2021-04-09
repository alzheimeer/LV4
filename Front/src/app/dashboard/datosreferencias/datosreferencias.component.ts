import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { NgForm } from '@angular/forms';
import { Requestx } from '../../models/request.models';
import Swal from 'sweetalert2';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-datosreferencias',
  templateUrl: './datosreferencias.component.html',
  styleUrls: ['./datosreferencias.component.scss']
})
export class DatosreferenciasComponent implements OnInit {
  id: any = '';
  requests!: Requestx;

  get usuarioauth() {
    return this.authService.usuario;
  }

  constructor(private router: Router, private authService: AuthService, private requestService: RequestService) { }

  ngOnInit(): void {
    this.id = this.usuarioauth.uid;

    this.requestService.getRequestById(this.usuarioauth.solicitud)
      .subscribe(resp => {
        this.requests = resp;
        console.log(this.requests);

      },(err) => {
        console.log('error:', err)
      });
  }


  guardar(form: NgForm) {
    if ( form.invalid ) {
      console.log('Formulario no válido');
      Swal.fire({
        title: 'Error',
        text: 'Formulario no válido',
        icon: 'error',
      });
      return;
    }
    Swal.fire({
      title: 'Espere',
      text: 'Guardando Informacion',
      allowOutsideClick: false
    });
    Swal.showLoading();
    if (this.requests._id) {
      this.requests.regVehiculo = true;
      this.requestService.updateRequestsById(this.requests)
        .subscribe(resp => {
         // console.log(resp);
          Swal.fire({
            title: 'OK',
            text: 'Datos De Vehiculo Enviados',
            icon: 'success',
          });

          this.router.navigateByUrl('/dashboard/misolicitud');
        }, (err) => {
          Swal.fire({
            title: 'Error',
            text: 'Formulario no válido',
            icon: 'error',
          });
          // console.log('Error');
        });
    }
  }


}
