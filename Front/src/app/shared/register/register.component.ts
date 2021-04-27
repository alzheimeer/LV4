import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output()
  value = new EventEmitter<number>();

  miFormulario: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }


  register() {

    const { name, surname, email, password } = this.miFormulario.value;
    Swal.fire({
      title: 'Espere',
      text: 'Registrando',
      allowOutsideClick: false
    });
    Swal.showLoading();
    this.authService.register(name, surname, email, password).subscribe((resp) => {

      Swal.close();
      // console.log(ok);
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
      } else {
        Swal.fire('Error', resp, 'error');
      }
    });
  }

  campoEsValido( campo: string ) {

    return this.miFormulario.controls[campo].errors
            && this.miFormulario.controls[campo].touched;
  }


  calc(valor: number){
    this.value.emit(valor);
  }
}
