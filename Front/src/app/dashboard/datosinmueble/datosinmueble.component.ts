import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Requestx } from 'src/app/models/request.models';
import Swal from 'sweetalert2';

import { RequestService } from '../services/request.service';



@Component({
  selector: 'app-datosdeinmueble',
  templateUrl: './datosinmueble.component.html',
  styleUrls: ['./datosinmueble.component.scss']
})
export class DatosinmuebleComponent implements OnInit {

  public departamentos = [
    'Amazonas',
    'Antioquia',
    'Arauca',
    'Atlántico',
    'Bolívar',
    'Boyacá',
    'Caldas',
    'Caquetá',
    'Casanare',
    'Cauca',
    'Cesar',
    'Chocó',
    'Córdoba',
    'Cundinamarca',
    'Guainía',
    'Guaviare',
    'Huila',
    'La Guajira',
    'Magdalena',
    'Meta',
    'Nariño',
    'Norte de Santander',
    'Putumayo',
    'Quindío',
    'Risaralda',
    'San Andrés y Providencia',
    'Santander',
    'Sucre',
    'Tolima',
    'Valle del Cauca',
    'Vaupés',
    'Vichada'];




  get usuarioauth() {
    return this.authService.usuario;
  }



  miFormulario = this.fb.group({
    tipo: ['', [Validators.required, Validators.minLength(3)]],
    matricula: ['', [Validators.required, Validators.minLength(5)]],
    uso: ['', [Validators.required, Validators.minLength(3)]],
    estrato: ['', [Validators.required]],
    departamento: ['', [Validators.required, Validators.minLength(3)]],
    ciudad: ['', [Validators.required, Validators.minLength(3)]],
    barrio: ['', [Validators.required, Validators.minLength(3)]],
    direccion: ['', [Validators.required, Validators.minLength(10)]],
    antiguedad: ['', [Validators.required, Validators.max(999)]],
    area: ['', [Validators.required]],
    valorComercial: [{ disabled: false, value: '' }, [Validators.required, Validators.min(50000)]],
  });

  requests!: Requestx;



  nuevoFavorito: FormControl = this.fb.control('', Validators.required);
  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private requestService: RequestService) {
  }


  ngOnInit(): void {
    this.requestService.getRequestByIdUser(this.usuarioauth.uid)
      .subscribe(resp => {
        this.requests = resp[0];
      }, (err) => {
        console.log('error:', err);
      });
  }

  getError(campo: string): string {
    let message = '';
    if (this.miFormulario.get(campo)?.hasError('required')) {
      message = 'Porfavor llene este Campo';
    } else if (this.miFormulario.get(campo)?.hasError('minlength')) {
      const minLength = this.miFormulario.get(campo)?.errors?.minlength.requiredLength;
      message = `Debe Tener mas mas de ${minLength} letras`;
    } else if (this.miFormulario.get(campo)?.hasError('pattern')) {
      message = `No Se Admiten Numeros Ni Simbolos`;
    } else if (this.miFormulario.get(campo)?.hasError('min')) {
      message = `El Valor Es Muy Bajo`;
    } else if (this.miFormulario.get(campo)?.hasError('max')) {
      message = `El Valor Es Muy Alto`;
    }

    return message;
  }

  campoEsValido(campo: string): any {
    return ((this.miFormulario.get(campo)?.touched || this.miFormulario.get(campo)?.dirty) && this.miFormulario.get(campo)?.invalid);
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) { return; }
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }

  borrar(i: number) {
    this.favoritosArr.removeAt(i);
  }


  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
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
      tipo,
      matricula,
      uso,
      estrato,
      departamento,
      ciudad,
      barrio,
      direccion,
      antiguedad,
      area,
      valorComercial,
    } = this.miFormulario.value;
    if (this.requests._id) {
      this.requestService
        .updateRequestsByIdInmueble(
          this.requests._id,
          tipo,
          matricula,
          uso,
          estrato,
          departamento,
          ciudad,
          barrio,
          direccion,
          antiguedad,
          area,
          valorComercial
        )
        .subscribe(
          (resp) => {
            Swal.fire({
              title: 'OK',
              text: 'Datos De Inmueble Enviados',
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
