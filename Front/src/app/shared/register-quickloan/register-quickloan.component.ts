import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../auth/services/auth.service';
import { ProductService } from '../../dashboard/services/product.service';
import { RequestService } from '../../dashboard/services/request.service';
import { Product, ProductIni } from '../../models/product.models';
import { CreateIniReq, CreateRequest } from '../../models/request.models';

@Component({
  selector: 'app-register-quickloan',
  templateUrl: './register-quickloan.component.html',
  styleUrls: ['./register-quickloan.component.scss'],
})
export class RegisterQuickloanComponent implements OnInit {

  @Output()
  value = new EventEmitter<number>();
  productos: Product[] = [];
  producto: Product = new ProductIni();
  request: CreateRequest = new CreateIniReq();

  miFormulario: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    secondname: '',
    surname: ['', [Validators.required]],
    secondsurname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    terminos: [false, Validators.requiredTrue],
    typeloan: '',
    politicas: [false, Validators.requiredTrue],
    habeas: [false, Validators.requiredTrue],
  });

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private requestService: RequestService
  ) { }

  ngOnInit(): void {
    // We obtain all products, we find the Id of Loan UltraRapido and fill object producto with the response.
    this.productService.getProducts().subscribe((resp) => {
      this.productos = resp;
      this.productos.forEach(element => {
        if (element.name === 'Prestamo UltraRapido') {
          this.productService.getProductById(element._id).subscribe((r) => {
            this.producto = r;
          });
        }
      });
    });

    this.miFormulario.reset({
      condiciones: false,
      politicas: false,
      habeas: false,
    });
  }

  login() {
    this.value.emit(2);
  }
  register() {
    this.miFormulario.controls.typeloan.setValue('quickloan');
    const {
      name,
      secondname,
      surname,
      secondsurname,
      email,
      password,
      typeloan,
    } = this.miFormulario.value;
    Swal.fire({
      title: 'Espere',
      text: 'Registrando Espere Porfavor ...',
      allowOutsideClick: false,
    });
    Swal.showLoading();



    this.authService.register(name, secondname, surname, secondsurname, email, password, typeloan)
      .subscribe((resp) => {
        Swal.close();
        // console.log('yupio', this.producto._id, this.producto.name)
        if (resp.user === 'user200') {
          // console.log('usuario Creado', resp)
          this.request.idUser = resp.iduser;
          this.request.idProduct = this.producto._id;
          this.request.value = 200000;
          this.request.time = 1;
          this.request.description = 'Ninguno';
          this.request.nombreProducto = this.producto.name;
          this.request.estadoPrestamo = false;
          this.request.estate = 'Sin Asignar';
          this.request.tasaEfectivaAnual = this.producto.iEfectivoAnual;
          this.request.tasaEfectivaAnualMax = this.producto.iEfectivoAnualMax;
          this.request.tasaMoraEA = this.producto.iMoraEfectivoAnual;
          this.request.tasaEfectivaMes = ((((Math.pow((1 + (this.producto.iEfectivoAnual / 100)), (1 / 12))) - 1) * 12) * 100) / 12;
          const im = this.request.tasaEfectivaMes / 100;
          const im2 = Math.pow((1 + im), -(this.request.time));
          const a = (this.request.value * im) / (1 - im2);
          this.request.valorCuotaBase = a;
          this.request.rgmf = (this.request.value / 1000) * this.producto.gmfCuatroxMil;
          this.request.administracion = this.producto.administracion;
          this.request.iva = (this.producto.administracion / 100) * this.producto.iva;
          this.request.aval = (this.request.value / 100) * this.producto.aval;
          this.request.soloInteres = (this.request.valorCuotaBase as number * this.request.time) - this.request.value;
          const totalExtrasCredito = ((this.request.aval + this.request.administracion + this.request.iva) / this.request.time);
          this.request.totalCredito = this.request.value + this.request.soloInteres + this.request.administracion + this.request.iva + this.request.aval;
          this.request.valorCuotaTotal = this.request.valorCuotaBase as number + totalExtrasCredito;
          this.request.valorConsignar = this.request.value - (this.request.rgmf);


          this.requestService.createRequest(this.request).subscribe((req) => {
              // console.log('id User', resp.iduser);
              // console.log('id request', req._id);
              this.authService.updateSolicitudUserById(resp.iduser, req._id).subscribe(() => {
                // console.log('actualizado usuario con id request')
                this.router.navigateByUrl('/landing/quickforms');
              });

            });
        } else {
          Swal.fire('Error', resp, 'error');
        }
      });
  }

  campoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  calc(valor: number) {
    this.value.emit(4);
  }
}
