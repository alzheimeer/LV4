import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { RequestService } from '../services/request.service';
// import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CreateRequest } from '../../models/request.models';
import { DataPersonalModel } from '../../models/datapersonal.models';
import { Product } from '../../models/product.models';
import { ProductService } from '../services/product.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit {


  valor: number = 0;
  meses: number = 1;
  tasa: number = 1.8778;
  interes: number = (this.valor/100)*this.tasa;
  tasaIva: number = 3762;
  iva: number = this.tasaIva;
  aval: number = (this.valor/100)*9.9;
  tecno: number = this.meses *19800;
  total: number = this.valor + this.interes + this.iva + this.aval + this.tecno;
  emi: number = this.total / this.meses;
  valuemin: number = 50000;
  valuemax: number = 500000;
  termmin: number = 1;
  termmax: number = 6;

  get usuario() {
    return this.authService.usuario;
  }
  // get solicitud() {
  //   return this.requestService.solicitud;
  // }

  formularioSolicitud: FormGroup = this.fb.group({
    idUser: [this.usuario.uid, Validators.required],
    idProduct: ['', Validators.required],
    value: [0, Validators.required],
    time: [0, Validators.required],
    description: ['Ninguno', Validators.required],
    estate: ['Pendiente'],
  })

  public productos: Product[] = [];
  public producto: any = [];

  hayerror = false;

  constructor(private fb: FormBuilder, private router: Router, private productService: ProductService, private authService: AuthService, private requestService: RequestService) { }

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(resp => {
      this.productos = resp;
    });
    this.formularioSolicitud.get('idProduct')?.valueChanges.subscribe( id => {
        //console.log(id)
        this.productService.getProductById(id).subscribe(producto => {
          this.producto = producto
          this.tasa = producto.imin
          this.valuemin = this.producto.valuemin
          this.valuemax = this.producto.valuemax
          this.termmin = this.producto.termmin
          this.termmax = this.producto.termmax
          this.valor = this.producto.valuemin
          this.meses = this.producto.termmin



        })
      });
      this.formularioSolicitud.get('value')?.valueChanges.subscribe( value => {
        //console.log(value)
        this.valor = value;
        this.iva = this.tasaIva * this.meses;
        this.aval = (this.valor / 100 ) * 9.9;
        this.tecno = this.meses *19800;
        this.interes = (this.valor/100)*this.tasa;
        this.total = this.valor + this.interes + this.iva + this.aval + this.tecno;
        this.emi = this.total / this.meses;

      })
      this.formularioSolicitud.get('time')?.valueChanges.subscribe( time => {
        //console.log(time)
        this.meses = time;
          if (this.meses == 1)
            this.tasa = 1.8778;
          if (this.meses == 2)
            this.tasa = 2.8243;
          if (this.meses == 3)
            this.tasa = 3.77715;
          if (this.meses == 4)
            this.tasa = 4.73595;
          if (this.meses == 5)
            this.tasa = 5.70065;
          if (this.meses == 6)
            this.tasa = 6.67105;
          this.iva = this.tasaIva * this.meses;
          this.aval = (this.valor / 100 ) * 9.9;
          this.tecno = this.meses *19800;
          this.interes = (this.valor/100)*this.tasa;
          this.total = this.valor + this.interes + this.iva + this.aval + this.tecno;
          this.emi = this.total / this.meses;
      })
      this.formularioSolicitud.get('idUser')?.disable();
  }

  campoEsValido(campo: string){
    return this.formularioSolicitud.controls[campo].errors
            && this.formularioSolicitud.controls[campo].touched;
  }


  guardar() {
    if (this.formularioSolicitud.invalid) {
      this.formularioSolicitud.markAllAsTouched
      Swal.fire({
        title: 'Error',
        text: 'Selecciona El Tipo De Prestamo',
        icon: 'error',
      });
      return
    }
    //console.log(this.formularioSolicitud.value);
    this.formularioSolicitud.get('idUser')?.enable();
    this.requestService.createRequest(this.formularioSolicitud.value).subscribe(
      (res) => {
        //console.log(res);
        this.formularioSolicitud.reset();
        this.router.navigate(['/dashboard/solicitudes']);
      },
      (err) => {
        console.log(err);
      }
    );
  }




  // guardar(form: NgForm) {
  //   if ( form.invalid ) {
  //     console.log('Formulario no válido');
  //     return;
  //   }


  //   let peticion: Observable<any>;

  //   if ( this.data.id ) {
  //     peticion = this.authService.completeUserById( this.data );
  //   }

  //   peticion.subscribe( resp => {


  //   });
  // }







  // pepe(){
  //   this.interes = (this.valor/100)*1.8778;
  //   console.log('dasd',this.interes);
  // }
  // formatLabel(value: number) {
  //   if (value >= 1000) {
  //     return Math.round(value / 1000) + 'k';
  //   }
  //   return value;
  // }
  // formatLabel1(value: number) {
  //   if (value >= 1000) {
  //     return Math.round(value / 1000) + 'k';
  //   }
  //   return value;
  // }

  // calc(valor: number){
  //   this.value.emit(valor);
  // }

}
