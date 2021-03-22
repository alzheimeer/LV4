import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = 'Datos Incorrectos';



  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

    // if (this.authService.isLogged()) {
    //   this.navigateTo();}
  }

  public async login(email: string, password: string) {

    this.authService.login(email, password).subscribe((ok) => {
      Swal.fire({
        title: 'Espere',
        text: 'Verificando',
        allowOutsideClick: false
      });
      Swal.showLoading();
      console.log(ok);
      if (ok === true) {
        this.navigateTo('/dashboard/solicitud');
        // this.router.navigateByUrl('/dashboard/solicitud');
        Swal.fire({
          title: 'Bienvenido',
          text: email,
          icon: 'success',
        });
      } else {
        Swal.fire('Datos Incorrectos', ok, 'error');
      }
    });
}

public navigateTo(url?: string) {
  url = url || 'nav';
  this.router.navigate([url], { replaceUrl: true });
}


}
