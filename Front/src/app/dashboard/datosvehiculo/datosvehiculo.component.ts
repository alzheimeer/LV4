import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DataPersonalModel } from '../../models/datapersonal.models';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-datosvehiculo',
  templateUrl: './datosvehiculo.component.html',
  styleUrls: ['./datosvehiculo.component.scss']
})
export class DatosvehiculoComponent implements OnInit {
  data: DataPersonalModel = new DataPersonalModel();

  get usuario() {
    return this.authService.usuario;
  }
  constructor(private router: Router, private authService: AuthService) { }

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

    let peticion: Observable<any>;

    if ( this.data.id ) {
      peticion = this.authService.completeUserById( this.data );
    }

    // peticion.subscribe( resp => {

    //   Swal.fire({
    //     title: 'Datos Personales',
    //     text: 'Guardados Con Exito',
    //     icon: 'success',
    //   });
    // });

  }
  ngOnInit(): void {
    this.data.id = this.usuario.uid;
  }

}
