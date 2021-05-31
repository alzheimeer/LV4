import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output()
  value = new EventEmitter<number>();

  miFormulario: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  flaq = 0;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }


  login() {
    // Extract email and password the miFormulario
    const { email, password } = this.miFormulario.value;

    this.authService.login(email, password).subscribe((resp) => {
      Swal.fire({
        title: 'Espere',
        text: 'Verificando',
        allowOutsideClick: false
      });
      Swal.showLoading();
      // console.log('login:', resp);
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
        this.router.navigateByUrl('/landing/quickforms');
        Swal.fire({
          title: 'Continua Ingresando Los Siguientes Datos',
          text: email,
          icon: 'success',
        });
      } else {
        Swal.fire('Error', resp, 'error');
      }
    });
  }

  calc(valor: number) {
    this.value.emit(valor);
  }
}
