import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Requestx } from 'src/app/models/request.models';
import Swal from 'sweetalert2';

import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-datostrabajo',
  templateUrl: './datostrabajo.component.html',
  styleUrls: ['./datostrabajo.component.scss']
})
export class DatostrabajoComponent implements OnInit {
  get usuarioauth() {
    return this.authService.usuario;
  }

  miFormularioEmpleado = this.fb.group({
    tiempoTrabajando: ['', [Validators.required, Validators.minLength(3)]],
    ingresoMensual: ['', [Validators.required, Validators.minLength(3)]],
    direccion: ['', [Validators.required, Validators.minLength(3)]],
    telefono: ['', [Validators.required, Validators.minLength(3)]],
    jefeInmediato: ['', [Validators.required, Validators.minLength(3)]],
    cargoActual: ['', [Validators.required, Validators.minLength(3)]]
  });
  miFormularioIndependiente = this.fb.group({
    tiempoTrabajando: ['', [Validators.required, Validators.minLength(3)]],
    ingresoMensual: ['', [Validators.required, Validators.minLength(3)]],
    direccion: ['', [Validators.required, Validators.minLength(3)]],
    telefono: ['', [Validators.required, Validators.minLength(3)]],
    actividadComercial: ['', [Validators.required, Validators.minLength(3)]]
  });
  miFormularioEmpresa = this.fb.group({
    nombreEmpresa: ['', [Validators.required, Validators.minLength(3)]],
    nitEmpresa: ['', [Validators.required, Validators.minLength(3)]],
    ingresoMensual: ['', [Validators.required, Validators.minLength(3)]],
    direccion: ['', [Validators.required, Validators.minLength(3)]],
    telefonoEmpresa: ['', [Validators.required, Validators.minLength(3)]],
    actividadComercial: ['', [Validators.required, Validators.minLength(3)]]
  });

  requests!: Requestx;
  sw = 0;


  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private requestService: RequestService) {
  }

  ngOnInit(): void {
    this.requestService.getRequestByIdUser(this.usuarioauth.uid)
      .subscribe(resp => {
        this.requests = resp[0];
      }, (err) => {
        console.log('error:', err)
      });
  }

  modalidad(modalidad: string) {
    if (modalidad === 'empleado') { this.sw = 1; }
    if (modalidad === 'independiente') { this.sw = 2; }
    if (modalidad === 'empresa') { this.sw = 3; }
  }

  getErrorEmpleado(campo: string): string {
    let message = '';
    if (this.miFormularioEmpleado.get(campo)?.hasError('required')) {
      message = 'Porfavor llene este Campo';
    } else if (this.miFormularioEmpleado.get(campo)?.hasError('minlength')) {
      const minLength = this.miFormularioEmpleado.get(campo)?.errors?.minlength.requiredLength;
      message = `Debe Tener mas mas de ${minLength} letras`;
    }
    return message;
  }

  campoEsValidoEmpleado(campo: string): any {
    return ((this.miFormularioEmpleado.get(campo)?.touched || this.miFormularioEmpleado.get(campo)?.dirty) && this.miFormularioEmpleado.get(campo)?.invalid);
  }

  guardarEmpleado() {
    if (this.miFormularioEmpleado.invalid) {
      this.miFormularioEmpleado.markAllAsTouched();
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
    const {
      tiempoTrabajando,
      ingresoMensual,
      direccion,
      telefono,
      jefeInmediato,
      cargoActual
    } = this.miFormularioEmpleado.value;
    if (this.requests._id) {
      this.requestService
        .updateRequestsByIdTrabajoEmpleado(
          this.requests._id,
          tiempoTrabajando,
          ingresoMensual,
          direccion,
          telefono,
          jefeInmediato,
          cargoActual
        )
        .subscribe(
          (resp) => {
            Swal.fire({
              title: 'OK',
              text: 'Datos De Trabajo Enviados',
              icon: 'success',
            });
            this.router.navigateByUrl('/dashboard/misolicitud');
          },
          (err) => {
            Swal.fire({
              title: 'Error',
              text: 'Formulario no válido',
              icon: 'error',
            });
          }
        );
    }
  }
  getErrorIndependiente(campo: string): string {
    let message = '';
    if (this.miFormularioIndependiente.get(campo)?.hasError('required')) {
      message = 'Porfavor llene este Campo';
    } else if (this.miFormularioIndependiente.get(campo)?.hasError('minlength')) {
      const minLength = this.miFormularioIndependiente.get(campo)?.errors?.minlength.requiredLength;
      message = `Debe Tener mas mas de ${minLength} letras`;
    }
    return message;
  }

  campoEsValidoIndependiente(campo: string): any {
    return ((this.miFormularioIndependiente.get(campo)?.touched || this.miFormularioIndependiente.get(campo)?.dirty) && this.miFormularioIndependiente.get(campo)?.invalid);
  }

  guardarIndependiente() {
    if (this.miFormularioIndependiente.invalid) {
      this.miFormularioIndependiente.markAllAsTouched();
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
    const {
      tiempoTrabajando,
      ingresoMensual,
      direccion,
      telefono,
      actividadComercial
    } = this.miFormularioIndependiente.value;
    if (this.requests._id) {
      this.requestService
        .updateRequestsByIdTrabajoIndependiente(
          this.requests._id,
          tiempoTrabajando,
          ingresoMensual,
          direccion,
          telefono,
          actividadComercial
        )
        .subscribe(
          (resp) => {
            Swal.fire({
              title: 'OK',
              text: 'Datos De Trabajo Enviados',
              icon: 'success',
            });
            this.router.navigateByUrl('/dashboard/misolicitud');
          },
          (err) => {
            Swal.fire({
              title: 'Error',
              text: 'Formulario no válido',
              icon: 'error',
            });
          }
      );
    }
  }
  getErrorEmpresa(campo: string): string {
    let message = '';
    if (this.miFormularioEmpresa.get(campo)?.hasError('required')) {
      message = 'Porfavor llene este Campo';
    } else if (this.miFormularioEmpresa.get(campo)?.hasError('minlength')) {
      const minLength = this.miFormularioEmpresa.get(campo)?.errors?.minlength.requiredLength;
      message = `Debe Tener mas mas de ${minLength} letras`;
    }
    return message;
  }

  campoEsValidoEmpresa(campo: string): any {
    return ((this.miFormularioEmpresa.get(campo)?.touched || this.miFormularioEmpresa.get(campo)?.dirty) && this.miFormularioEmpresa.get(campo)?.invalid);
  }

  guardarEmpresa() {
    if (this.miFormularioEmpresa.invalid) {
      this.miFormularioEmpresa.markAllAsTouched();
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
    const {
      nombreEmpresa,
      nitEmpresa,
      ingresoMensual,
      direccion,
      telefonoEmpresa,
      actividadComercial
    } = this.miFormularioEmpresa.value;
    if (this.requests._id) {
      this.requestService
        .updateRequestsByIdTrabajoEmpresa(
          this.requests._id,
          nombreEmpresa,
          nitEmpresa,
          ingresoMensual,
          direccion,
          telefonoEmpresa,
          actividadComercial
        )
        .subscribe(
          (resp) => {
            Swal.fire({
              title: 'OK',
              text: 'Datos De Trabajo Enviados',
              icon: 'success',
            });
            this.router.navigateByUrl('/dashboard/misolicitud');
          },
          (err) => {
            Swal.fire({
              title: 'Error',
              text: 'Formulario no válido',
              icon: 'error',
            });
          }
        );
    }
  }
}
