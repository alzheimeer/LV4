import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../auth/services/auth.service';
import { ProductIniCreate } from '../../models/product.models';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.component.html',
  styleUrls: ['./crearproducto.component.scss']
})
export class CrearproductoComponent implements OnInit {

  public usuario: any = [];

  get usuarioauth() {
    return this.authService.usuario;
  }

  miFormulario = this.fb.group({
    activo: [true, [Validators.required]],
    name: ['', Validators.required],
    valuemin: [200000, Validators.required],
    valuemax: [200000, [Validators.required]],
    imin: [1.5, [Validators.required]],
    imax: [1.8, [Validators.required]],
    termmin: [1, [Validators.required]],
    termmax: [6, [Validators.required]],
    imageUrl: [''],
    regInmueble: [false, Validators.required],
    regPersonales: [false, Validators.required],
    regVehiculo: [false, Validators.required],
    regTrabajo: [false, Validators.required],
    regReferencias: [false, Validators.required],
    regReferenciasCom: [false, Validators.required],
    regCedula: [false, Validators.required],
    regPasaporte: [false, Validators.required],
    regTarjetav: [false, Validators.required],
    regMatricula: [false, Validators.required],
    regExtracto: [false, Validators.required],
    regCamaraCom: [false, Validators.required],
    regRut: [false, Validators.required],
    regEstudioObra: [false, Validators.required],
    regProgramaObra: [false, Validators.required],
    regCuraduria: [false, Validators.required],
    regLicenciaConst: [false, Validators.required],
    iEfectivoAnual: [25, Validators.required],
    iEfectivoAnualMax: [25.83, Validators.required],
    iMoraEfectivoAnual: [23.83, Validators.required],
    administracion: [20000, Validators.required],
    gmfCuatroxMil: [4, Validators.required],
    auditorObra: [0, Validators.required],
    comisionAdminHipo: [0, Validators.required],
    excedenteComisionAdminHipo: [0, Validators.required],
    registroHipoteca: [0, Validators.required],
    interesesAnticipados: [0, Validators.required],
    parqueadero: [0, Validators.required],
    peritaje: [0, Validators.required],
    registroSimit: [0, Validators.required],
    iva: [19, Validators.required],
    aval: [9.9, Validators.required],
    step: [50000, Validators.required]
  });

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

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);
  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    console.log("dat")
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
      allowOutsideClick: false,
    });
    Swal.showLoading();
    const {
      name,
      valuemin,
      valuemax,
      imin,
      imax,
      termmin,
      termmax,
      imageUrl,
      regInmueble,
      regPersonales,
      regVehiculo,
      regTrabajo,
      regReferencias,
      regReferenciasCom,
      regCedula,
      regPasaporte,
      regTarjetav,
      regMatricula,
      regExtracto,
      regCamaraCom,
      regRut,
      regEstudioObra,
      regProgramaObra,
      regCuraduria,
      regLicenciaConst,
      iEfectivoAnual,
      iEfectivoAnualMax,
      iMoraEfectivoAnual,
      administracion,
      gmfCuatroxMil,
      auditorObra,
      comisionAdminHipo,
      excedenteComisionAdminHipo,
      registroHipoteca,
      interesesAnticipados,
      parqueadero,
      peritaje,
      registroSimit,
      iva,
      aval,
      step,
      activo,
    } = this.miFormulario.value;

    let prod = new ProductIniCreate();
    prod.name = name;
    prod.valuemin = valuemin;
    prod.valuemax = valuemax;
    prod.imin = imin;
    prod.imax = imax;
    prod.termmin = termmin;
    prod.termmax = termmax;
    prod.imageUrl = imageUrl;
    prod.regInmueble = regInmueble;
    prod.regPersonales = regPersonales;
    prod.regVehiculo = regVehiculo;
    prod.regTrabajo = regTrabajo;
    prod.regReferencias = regReferencias;
    prod.regReferenciasCom = regReferenciasCom;
    prod.regCedula = regCedula;
    prod.regPasaporte = regPasaporte;
    prod.regTarjetav = regTarjetav;
    prod.regMatricula = regMatricula;
    prod.regExtracto = regExtracto;
    prod.regCamaraCom = regCamaraCom;
    prod.regRut = regRut;
    prod.regEstudioObra = regEstudioObra;
    prod.regProgramaObra = regProgramaObra;
    prod.regCuraduria = regCuraduria;
    prod.regLicenciaConst = regLicenciaConst;
    prod.iEfectivoAnual = iEfectivoAnual;
    prod.iEfectivoAnualMax = iEfectivoAnualMax;
    prod.iMoraEfectivoAnual = iMoraEfectivoAnual;
    prod.administracion = administracion;
    prod.gmfCuatroxMil = gmfCuatroxMil;
    prod.auditorObra = auditorObra;
    prod.comisionAdminHipo = comisionAdminHipo;
    prod.excedenteComisionAdminHipo = excedenteComisionAdminHipo;
    prod.registroHipoteca = registroHipoteca;
    prod.interesesAnticipados = interesesAnticipados;
    prod.parqueadero = parqueadero;
    prod.peritaje = peritaje;
    prod.registroSimit = registroSimit;
    prod.iva = iva;
    prod.aval = aval;
    prod.step = step;
    prod.activo = activo;
    this.productService.createProduct(prod)
      .subscribe(
        (resp) => {
          Swal.fire({
            title: 'OK',
            text: 'Producto Creado',
            icon: 'success',
          });

          this.router.navigateByUrl('/dashboard/productos');
        },
        (err) => {
          Swal.fire({
            title: 'Error',
            text: 'Error En La Creacion Del Producto',
            icon: 'error',
          });
        }
      );
  }
}
