import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../auth/services/auth.service';
import { ProductService } from '../../dashboard/services/product.service';
import { RequestService } from '../../dashboard/services/request.service';
import { UserService } from '../../dashboard/services/user.service';
import { Product, ProductIni } from '../../models/product.models';
import { CreateIniReq, CreateRequest } from '../../models/request.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output()
  value = new EventEmitter<number>();
  request: CreateRequest = new CreateIniReq();
  productos: Product[] = [];
  producto: Product = new ProductIni();
  
  miFormulario: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  flaq = 0;
  constructor(
    private requestService: RequestService,
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
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
  }

  login() {
    // Extract email and password the miFormulario
    const { email, password } = this.miFormulario.value;

    this.authService.login(email, password).subscribe((resp) => {
      Swal.fire({
        title: 'Espere',
        text: 'Verificando',
        allowOutsideClick: false,
      });
      Swal.showLoading();
      console.log('login:', resp);
      if (resp === 'user') {
        this.router.navigateByUrl('/dashboard/misolicitud');
        Swal.fire({
          title: 'Bienvenido',
          text: email,
          icon: 'success',
        });
      } else if (resp === 'moderator') {
        this.router.navigateByUrl('/dashboard/solicitudes');
        Swal.fire({
          title: 'Bienvenido Analista',
          text: email,
          icon: 'success',
        });
      } else if (resp === 'admin') {
        this.router.navigateByUrl('/dashboard/usuarios');
        Swal.fire({
          title: 'Bienvenido  Administrador',
          text: email,
          icon: 'success',
        });
      } else if (resp === 'user200') {
        if (localStorage.getItem('id')) {
          this.userService.getUserById(localStorage.getItem('id')).subscribe((usuario) => {
              if (usuario.solicitud !== '') {
                this.requestService.getRequestById(usuario.solicitud).subscribe((solicitud) => {
                  const cv: any = solicitud;
                  if (cv.msg === 'No Existe Esa Solicitud') {
                        this.request.idUser = usuario._id;
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
                        this.request.rgmf = (this.request.value / 1000) * this.producto.gmfCuatroxMil;
                        this.request.administracion = this.producto.administracion;
                        this.request.iva = 0;
                        this.request.valorConsignar = this.request.value - (this.request.rgmf);

                        this.requestService.createRequest(this.request).subscribe((req) => {
                            this.authService.updateSolicitudUserById(usuario._id, req._id).subscribe(() => {
                                this.router.navigateByUrl('/landing/quickforms');
                            });
                            Swal.fire({
                            title: 'Bienvenido',
                            text: usuario.name,
                            icon: 'success',
                          });
                        });
                  
                  } else if (solicitud.estate === 'Aprobada' || solicitud.estate === 'Facturacion') {
                    this.router.navigateByUrl('/dashboard/misolicitud');
                    Swal.fire({
                      title: 'Bienvenido',
                      text: usuario.name,
                      icon: 'success',
                    });
                  } else {
                    this.router.navigateByUrl('/landing/quickforms');
                    Swal.fire({
                      title: 'Continua Ingresando Los Siguientes Datos',
                      text: email,
                      icon: 'success',
                    });
                  }
                });
              } else {
                this.router.navigateByUrl('/landing/quickforms');
                Swal.fire({
                  title: 'Continua Ingresando Los Siguientes Datos',
                  text: email,
                  icon: 'success',
                });
              }
            });
        }

      } else {
        Swal.fire('Error', resp, 'error');
      }
    });
  }

  calc(valor: number) {
    this.value.emit(valor);
  }
}
