import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-register-quickloan',
  templateUrl: './register-quickloan.component.html',
  styleUrls: ['./register-quickloan.component.scss']
})
export class RegisterQuickloanComponent implements OnInit {


  @Output()
  value = new EventEmitter<number>();

  miFormulario: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    secondname: '',
    surname: ['', [Validators.required]],
    secondsurname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    terminos: [false, Validators.requiredTrue],
    typeloan: '',
    // politicas: [false, Validators.requiredTrue],
    // habeas: [false, Validators.requiredTrue],
  });

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      condiciones: false,
      politicas: false,
      habeas: false
    });
  }

  login() {
    this.value.emit(2);
  }
  register() {
    this.miFormulario.controls['typeloan'].setValue('quickloan');
    const { name, secondname, surname, secondsurname, email, password, typeloan } = this.miFormulario.value;
    Swal.fire({
      title: 'Espere',
      text: 'Registrando Espere Porfavor ...',
      allowOutsideClick: false
    });
    Swal.showLoading();


    this.authService.register(name, secondname, surname, secondsurname, email, password, typeloan).subscribe((resp) => {

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
      } else if (resp === 'user200') {
        this.router.navigateByUrl('/landing/quickforms');
        // Swal.fire({
        //   title: 'Bienvenido',
        //   text: email,
        //   icon: 'success',
        // });
      } else {
        Swal.fire('Error', resp, 'error');
      }
    });
  }

  campoEsValido(campo: string) {

    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched;
  }


  calc(valor: number) {
    this.value.emit(4);
  }
}
