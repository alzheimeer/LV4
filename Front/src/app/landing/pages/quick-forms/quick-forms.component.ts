import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../../auth/services/auth.service';
import { RequestService } from '../../../dashboard/services/request.service';
import { UserService } from '../../../dashboard/services/user.service';
import { RequestIni, Requestx } from '../../../models/request.models';
import { User } from '../../../models/user.models';



@Component({
  selector: 'app-quick-forms',
  templateUrl: './quick-forms.component.html',
  styleUrls: ['./quick-forms.component.scss']
})
export class QuickFormsComponent implements OnInit {

  get usuarioauth() {
    return this.authService.usuario;
  }

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

  solicitud: Requestx = new RequestIni();

  hayerror = false;
  ids = '';
  primerform = true;
  segundoform = false;
  tercerform = false;
  cuartaform = false;
  quintaform = false;
  situacionlaboral = '';
  numdoc = 0;

  miFormulario = this.fb.group({
    tipodoc: ['', [Validators.required, Validators.minLength(3)]],
    fechaNac: ['', Validators.required],
    fechaExp: ['', Validators.required],
    pais: [''],
    departamento: [''],
    barrio: [''],
    ciudad: ['', [Validators.required, Validators.minLength(5)]],
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

  miFormulario2 = this.fb.group({
    genero: ['', Validators.required],
    estadocivil: ['', Validators.required],
    personasacargo: ['', Validators.required],
    ingresos: ['', Validators.required],
    egresos: ['', Validators.required],
    numhijos: ['', Validators.required],
    niveldeestudios: ['', Validators.required],
    estadodeestudios: ['', Validators.required],
    tipovivienda: ['', Validators.required],
    tiempoenvivienda: ['', Validators.required]
  });

  miFormulario3 = this.fb.group({
    refpnombre: ['', Validators.required],
    refpapellido: ['', Validators.required],
    refpciudad: ['', Validators.required],
    refpcelular: ['', Validators.required],
    reffnombre: ['', Validators.required],
    reffapellido: ['', Validators.required],
    reffciudad: ['', Validators.required],
    reffcelular: ['', Validators.required],
    referido: '',
  });

  miFormulario4 = this.fb.group({
    situacionlaboral: ['', Validators.required],
    actividad: '',
    actividadcargo: '',
    antiguedadempresa: '',
    nombreempresa: '',
    telefonoempresa: '',
    uso: ['', Validators.required],
  });






  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private requestService: RequestService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.authService.validarToken().subscribe((resp) => {
      this.userService.getUserById(this.usuarioauth.uid).subscribe((res) => {
        this.usuario = res;
        this.numdoc = this.usuario.personal.numdoc;
      });
    });

    this.miFormulario4.get('situacionlaboral')?.valueChanges.subscribe((value) => {
      this.situacionlaboral = value;
    });


  }

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





  segundaparte(): void {
    //console.log(this.usuarioauth)
    this.primerform = false;
    this.segundoform = true;
  }
  terceraparte(): void {
    //console.log(this.usuarioauth)
    this.segundoform = false;
    this.tercerform = true;
  }
  cuartaparte(): void {
    //console.log(this.usuarioauth)
    this.cuartaform = true;
    this.tercerform = false;
  }

  guardar(): void {
    if (!this.usuarioauth.uid) {
      this.ids = localStorage.getItem('id') as string;
    }
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
      ciudad,
      direccion,
      numdoc,
      celular1,
      celular2,
      banco,
      tipocuenta,
      numcuenta,
    } = this.miFormulario.value;

    if (this.usuarioauth.uid) {
      this.userService.updateUserByIdX(
        this.usuarioauth.uid,
        tipodoc,
        fechaNac,
        fechaExp,
        'Colombia',
        '',
        ciudad,
        '',
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
            // this.requestService.updateRequestsByIdNumdoc(this.usuarioauth.solicitud as string, numdoc as string)
            // .subscribe(x => console.log('ok'));
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



  guardar2(): void {
    if (!this.usuarioauth.uid) {
      this.ids = localStorage.getItem('id') as string;
    }
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
      ingresos,
      egresos,
      genero,
      estadocivil,
      personasacargo,
      numhijos,
      niveldeestudios,
      estadodeestudios,
      tipovivienda,
      tiempoenvivienda,
    } = this.miFormulario2.value;

    if (this.usuarioauth.uid) {
      this.userService.updateUserByIdX2(
        this.usuarioauth.uid,
        ingresos,
        egresos,
        genero,
        estadocivil,
        personasacargo,
        numhijos,
        niveldeestudios,
        estadodeestudios,
        tipovivienda,
        tiempoenvivienda,
      )
        .subscribe(
          (resp) => {
            Swal.fire({
              title: 'OK',
              text: 'Datos Enviados',
              icon: 'success',
            });
            this.segundoform = false;
            this.tercerform = true;
            // this.requestService.updateRequestsByIdNumdoc(this.usuarioauth.solicitud as string, numdoc as string)
            // .subscribe(x => console.log('ok'));
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


  guardar3(): void {
    if (!this.usuarioauth.uid) {
      this.ids = localStorage.getItem('id') as string;
    }
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
      refpnombre,
      refpapellido,
      refpciudad,
      refpcelular,
      reffnombre,
      reffapellido,
      reffciudad,
      reffcelular,
      referido,
    } = this.miFormulario3.value;

    /* if (referido) {
      this.
    } */
    this.requestService.updateRequestsByIdRefQuick(
      this.usuario.solicitud,
      refpnombre,
      refpapellido,
      refpciudad,
      refpcelular,
      reffnombre,
      reffapellido,
      reffciudad,
      reffcelular
    )
      .subscribe((res) => {
        Swal.fire({
          title: 'OK',
          text: 'Datos Enviados',
          icon: 'success',
        });
        this.cuartaform = true;
        this.tercerform = false;
      });
  }


  guardar4(): void {
    if (!this.usuarioauth.uid) {
      this.ids = localStorage.getItem('id') as string;
    }
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
      situacionlaboral,
      actividad,
      actividadcargo,
      antiguedadempresa,
      nombreempresa,
      telefonoempresa,
      uso,
    } = this.miFormulario4.value;

    this.requestService.updateRequestsByIdLaboralQuick(
      this.usuario.solicitud,
      situacionlaboral,
      actividad,
      actividadcargo,
      antiguedadempresa,
      nombreempresa,
      telefonoempresa,
      uso,
    )
      .subscribe((res) => {
        Swal.fire({
          title: 'OK',
          text: 'Datos Enviados',
          icon: 'success',
        });
        this.quintaform = true;
        this.cuartaform = false;
      });
  }


}
