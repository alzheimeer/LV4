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
  situacionLaboral = '';
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
    situacionLaboral: ['', Validators.required],
    actividad: '',
    actividadcargo: '',
    antiguedaddeempresa: '',
    nombreempresa: '',
    telefonoempresa: 0,
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

    this.miFormulario4.get('situacionLaboral')?.valueChanges.subscribe((value) => {
      this.situacionLaboral = value;
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
      if (localStorage.getItem('id')) {
        this.ids = localStorage.getItem('id') as string;
        this.usuarioauth.uid = localStorage.getItem('id') as string;
      } else {
        this.router.navigateByUrl('/dashboard/quickloan');
      }
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
    // console.log('antes', this.miFormulario.value);
    this.userService.getUserById(this.usuarioauth.uid).subscribe((rt) => {
      this.usuario = rt;
      this.usuario.personal.tipodoc = tipodoc;
      this.usuario.personal.fechaNac = fechaNac;
      this.usuario.personal.fechaExp = fechaExp;
      this.usuario.personal.pais = 'Colombia';
      this.usuario.personal.ciudad = ciudad;
      this.usuario.personal.direccion = direccion;
      this.usuario.personal.numdoc = numdoc;
      this.usuario.personal.celular1 = celular1;
      this.usuario.personal.celular2 = celular2;
      this.usuario.banca.banco = banco;
      this.usuario.banca.tipocuenta = tipocuenta;
      this.usuario.banca.numcuenta = numcuenta;
      this.userService.updateUserById(this.usuario)
        .subscribe(
          (resp) => {
            Swal.fire({
              title: 'OK',
              text: 'Datos Enviados',
              icon: 'success',
            });
            this.requestService.updateRequestsByIdNumdoc(this.usuarioauth.solicitud as string, numdoc as string)
              .subscribe(x => console.log('ok'));
            this.primerform = false;
            this.segundoform = true;

          },
          (err) => {
            Swal.fire({
              title: 'Error',
              text: 'Formulario no válido',
              icon: 'error',
            });
          }
        );
    });
  }



  guardar2(): void {
    if (!this.usuarioauth.uid) {
      if (localStorage.getItem('id')) {
        this.ids = localStorage.getItem('id') as string;
        this.usuarioauth.uid = localStorage.getItem('id') as string;
      } else {
        this.router.navigateByUrl('/dashboard/quickloan');
      }
    }
    if (this.miFormulario2.invalid) {
      this.miFormulario2.markAllAsTouched();
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
    this.userService.getUserById(this.usuarioauth.uid).subscribe((rt) => {
      this.usuario = rt;
      this.usuario.banca.ingresos = ingresos;
      this.usuario.banca.egresos = egresos;
      this.usuario.personal.genero = genero;
      this.usuario.personal.estadocivil = estadocivil;
      this.usuario.personal.personasacargo = personasacargo;
      this.usuario.personal.numhijos = numhijos;
      this.usuario.personal.niveldeestudios = niveldeestudios;
      this.usuario.personal.estadodeestudios = estadodeestudios;
      this.usuario.personal.tipovivienda = tipovivienda;
      this.usuario.personal.tiempoenvivienda = tiempoenvivienda;
      this.userService.updateUserById(this.usuario)
        .subscribe(
          (resp) => {
            Swal.fire({
              title: 'OK',
              text: 'Datos Enviados',
              icon: 'success',
            });
            this.segundoform = false;
            this.tercerform = true;
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
    });
  }


  guardar3(): void {
    if (!this.usuarioauth.uid) {
      if (localStorage.getItem('id')) {
        this.ids = localStorage.getItem('id') as string;
        this.usuarioauth.uid = localStorage.getItem('id') as string;
      } else {
        this.router.navigateByUrl('/dashboard/quickloan');
      }
    }
    if (this.miFormulario3.invalid) {
      this.miFormulario3.markAllAsTouched();
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
   // console.log('Formulario 3', this.miFormulario3.value);


    this.requestService.getRequestById(this.usuario.solicitud).subscribe((r) => {
      this.solicitud = r;
      this.solicitud.refPersonalQuick.nombre = refpnombre;
      this.solicitud.refPersonalQuick.apellido = refpapellido;
      this.solicitud.refPersonalQuick.ciudad = refpciudad;
      this.solicitud.refPersonalQuick.celular = refpcelular;
      this.solicitud.refFamiliarQuick.nombre = reffnombre;
      this.solicitud.refFamiliarQuick.apellido = reffapellido;
      this.solicitud.refFamiliarQuick.ciudad = reffciudad;
      this.solicitud.refFamiliarQuick.celular = reffcelular;
      this.requestService.updateRequestsById(this.solicitud).subscribe((res) => {
        Swal.fire({
          title: 'OK',
          text: 'Datos Enviados',
          icon: 'success',
        });
        this.cuartaform = true;
        this.tercerform = false;
      });
    });
  }


  guardar4(): void {
    if (!this.usuarioauth.uid) {
      if (localStorage.getItem('id')) {
        this.ids = localStorage.getItem('id') as string;
        this.usuarioauth.uid = localStorage.getItem('id') as string;
      } else {
        this.router.navigateByUrl('/dashboard/quickloan');
      }
    }
    if (this.miFormulario4.invalid) {
      this.miFormulario4.markAllAsTouched();
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
      situacionLaboral,
      actividad,
      actividadcargo,
      antiguedaddeempresa,
      nombreempresa,
      telefonoempresa,
      uso,
    } = this.miFormulario4.value;
    this.requestService.getRequestById(this.usuario.solicitud).subscribe((r) => {
      this.solicitud = r;
      this.solicitud.trabajoQuick.situacionLaboral = situacionLaboral;
      this.solicitud.trabajoQuick.actividad = actividad;
      this.solicitud.trabajoQuick.actividadcargo = actividadcargo;
      this.solicitud.trabajoQuick.antiguedaddeempresa = antiguedaddeempresa;
      this.solicitud.trabajoQuick.nombreempresa = nombreempresa;
      this.solicitud.trabajoQuick.telefonoempresa = telefonoempresa;
      this.solicitud.trabajoQuick.uso = uso;
      this.requestService.updateRequestsById(this.solicitud)
      .subscribe((res) => {
        Swal.fire({
          title: 'OK',
          text: 'Datos Enviados',
          icon: 'success',
        });
        this.quintaform = true;
        this.cuartaform = false;
        this.router.navigateByUrl('/landing/quickverify');
      });
    });

  }
}
