import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    name:     ['', [Validators.required]],
    surname:  ['', [Validators.required]],
    email:    ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  register() {

    // Extract email and password the miFormulario
    const { name, surname, email, password } = this.miFormulario.value;

    this.authService.register(name, surname, email, password).subscribe((ok) => {
      Swal.fire({
        title: 'Espere',
        text: 'Registrando',
        allowOutsideClick: false
      });
      console.log(ok);
      if ( ok === true ){
        this.router.navigateByUrl('/dashboard/solicitud');
        Swal.fire({
          title: 'Bienvenido',
          text: email,
          icon: 'success',
        });
      } else {
        Swal.fire('Error', ok, 'error');
      }
    });
  }

  campoEsValido( campo: string ) {

    return this.miFormulario.controls[campo].errors
            && this.miFormulario.controls[campo].touched;
  }

  ngOnInit(): void {
  }

}
