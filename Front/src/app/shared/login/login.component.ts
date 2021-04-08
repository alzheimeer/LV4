import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import Swal from 'sweetalert2';

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

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }


  login() {

    // Extract email and password the miFormulario
    const { email, password } = this.miFormulario.value;

    this.authService.login(email, password).subscribe((ok) => {
      Swal.fire({
        title: 'Espere',
        text: 'Verificando',
        allowOutsideClick: false
      });
      Swal.showLoading();
      console.log(ok);
      if (ok === true) {
        this.router.navigateByUrl('/dashboard/misolicitud');
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

  calc(valor: number){
    this.value.emit(valor);
  }
}
