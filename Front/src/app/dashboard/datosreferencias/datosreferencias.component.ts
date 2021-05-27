import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Requestx } from 'src/app/models/request.models';
import Swal from 'sweetalert2';

import { RequestService } from '../services/request.service';



@Component({
  selector: 'app-datosreferencias',
  templateUrl: './datosreferencias.component.html',
  styleUrls: ['./datosreferencias.component.scss']
})
export class DatosreferenciasComponent implements OnInit, AfterViewInit {
  isScrolled = false;

  get usuarioauth() {
    return this.authService.usuario;
  }



  miFormulario = this.fb.group({
    nombre1: ['', [Validators.required, Validators.minLength(3)]],
    parentezco1: ['', [Validators.required, Validators.minLength(3)]],
    direccion1: ['', [Validators.required, Validators.minLength(3)]],
    celular1: ['', [Validators.required]],
    nombre2: ['', [Validators.required, Validators.minLength(3)]],
    parentezco2: ['', [Validators.required, Validators.minLength(3)]],
    direccion2: ['', [Validators.required, Validators.minLength(3)]],
    celular2: ['', [Validators.required]],
    nombre3: '',
    parentezco3: '',
    direccion3: '',
    celular3: '',

  });

  requests!: Requestx;

  @HostListener('window:scroll')
  scrollEvent() {
    window.pageYOffset >= 80
      ? (this.isScrolled = true)
      : (this.isScrolled = false);
  }

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);
  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private requestService: RequestService) {
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    this.requestService.getRequestByIdUser(this.usuarioauth.uid)
      .subscribe(resp => {
        this.requests = resp[0];
      }, (err) => {
        console.log('error:', err)
      });
  }

  getError(campo: string): string {
    let message = '';
    if (this.miFormulario.get(campo)?.hasError('required')) {
      message = 'Porfavor llene este Campo';
    } else if (this.miFormulario.get(campo)?.hasError('minlength')) {
      const minLength = this.miFormulario.get(campo)?.errors?.minlength.requiredLength;
      message = `Debe Tener mas mas de ${minLength} letras`;
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
      nombre1,
      parentezco1,
      direccion1,
      celular1,
      nombre2,
      parentezco2,
      direccion2,
      celular2,
      nombre3,
      parentezco3,
      direccion3,
      celular3,
    } = this.miFormulario.value;

    if (this.requests._id) {
      this.requestService
        .updateRequestsByIdRefFam(
          this.requests._id,
          nombre1,
          parentezco1,
          direccion1,
          celular1,
          nombre2,
          parentezco2,
          direccion2,
          celular2,
          nombre3,
          parentezco3,
          direccion3,
          celular3,
        )
        .subscribe(
          (resp) => {
            Swal.fire({
              title: 'OK',
              text: 'Datos De Referencias Enviados',
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
