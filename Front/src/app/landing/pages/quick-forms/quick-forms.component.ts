import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../../auth/services/auth.service';
import { RequestService } from '../../../dashboard/services/request.service';
import { UserService } from '../../../dashboard/services/user.service';
import { User } from '../../../models/user.models';



@Component({
  selector: 'app-quick-forms',
  templateUrl: './quick-forms.component.html',
  styleUrls: ['./quick-forms.component.scss']
})
export class QuickFormsComponent implements OnInit {
  public tiposIdentificacion = [
    'Cedula De Ciudadania',
    'Cedula De Extranjeria',
  ];

  public tipocuenta = ['Cuenta De Ahorros', 'Cuenta Corriente'];
  public bancos = [
    'Banco de Bogota',
    'Banco Popular',
    'Banco CorpBanca',
    'Bancolombia',
    'Citibank',
    'Banco GNB Sudameris',
    'BBVA Colombia',
    'Banco De Occidente',
    'Banco Caja Social',
    'Davivienda',
    'Scotiabanck',
    'Banagrario',
    'AV Villas',
    'Scotiabank',
  ];


  public usuarios: User[] = [];
  public usuario: any = [];

  get usuarioauth() {
    return this.authService.usuario;
  }

  hayerror = false;
  ids = '';
  primerform = true;
  segundoform = false;
  tercerform = false;

  miFormulario = this.fb.group({
    tipodoc: ['', [Validators.required, Validators.minLength(3)]],
    fechaNac: ['', Validators.required],
    fechaExp: ['', Validators.required],
    pais: [''],
    departamento: [''],
    ciudad: ['', [Validators.required, Validators.minLength(5)]],
    barrio: [''],
    direccion: ['', [Validators.required, Validators.minLength(3)]],
    numdoc: ['', [Validators.required, Validators.minLength(5)]],
    celular1: [
      '',
      [
        Validators.required,
        Validators.min(999999999),
        Validators.max(9999999999),
      ],
    ],
    celular2: '',
    banco: ['', [Validators.required]],
    tipocuenta: ['', [Validators.required, Validators.minLength(3)]],
    numcuenta: ['', [Validators.required, Validators.minLength(5)]],
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);
  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private requestService: RequestService,
    private userService: UserService
  ) { }

  ngOnInit(): void { }

  getError(campo: string): string {
    let message = '';
    if (this.miFormulario.get(campo)?.hasError('required')) {
      message = 'Porfavor llene este Campo';
    } else if (this.miFormulario.get(campo)?.hasError('minlength')) {
      const minLength = this.miFormulario.get(campo)?.errors?.minlength
        .requiredLength;
      message = `Debe Tener mas mas de ${minLength} letras`;
    } else if (this.miFormulario.get(campo)?.hasError('min')) {
      message = `NO ES UN NUMERO DE TELEFONO VALIDO`;
    } else if (this.miFormulario.get(campo)?.hasError('max')) {
      message = `NO ES UN NUMERO DE TELEFONO VALIDO`;
    }
    return message;
  }

  campoEsValido(campo: string): any {
    return (
      (this.miFormulario.get(campo)?.touched ||
        this.miFormulario.get(campo)?.dirty) &&
      this.miFormulario.get(campo)?.invalid
    );
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) {
      return;
    }
    this.favoritosArr.push(
      this.fb.control(this.nuevoFavorito.value, Validators.required)
    );
    this.nuevoFavorito.reset();
  }

  borrar(i: number) {
    this.favoritosArr.removeAt(i);
  }

  segundaparte() {
    this.primerform = false;
    this.segundoform = true;
  }

  guardar() {
    if (!this.usuarioauth.uid)
      this.ids = localStorage.getItem('id') as string;
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
      allowOutsideClick: false,
    });
    Swal.showLoading();
    const {
      tipodoc,
      fechaNac,
      fechaExp,
      pais,
      departamento,
      ciudad,
      barrio,
      direccion,
      numdoc,
      celular1,
      celular2,
      banco,
      tipocuenta,
      numcuenta,
    } = this.miFormulario.value;
    console.log(this.ids);
    if (localStorage.getItem('id')) {
      this.userService.updateUserByIdX(
        this.ids,
        tipodoc,
        fechaNac,
        fechaExp,
        pais,
        departamento,
        ciudad,
        barrio,
        direccion,
        numdoc,
        celular1,
        celular2,
        banco,
        tipocuenta,
        numcuenta
      )
        .subscribe(
          (resp) => {
            Swal.fire({
              title: 'OK',
              text: 'Datos Enviados',
              icon: 'success',
            });
            this.primerform = false;
            this.segundoform = true;
            // this.requestService.updateRequestsByIdNumdoc(this.usuarioauth.solicitud as string, numdoc as string).subscribe(x => console.log('ok'));
            // this.router.navigateByUrl('/dashboard/misolicitud');
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
