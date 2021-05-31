import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  correr = false;
  @ViewChild('closeModal') private closeModal!: ElementRef;
  @ViewChild('closeModal1') private closeModal1!: ElementRef;

  miFormulario: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  miFormulario1: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    typeloan: '',
  });

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

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


  register() {

    // Extract email and password the miFormulario
    const { name, secondname, surname, secondsurname, email, password, typeloan } = this.miFormulario1.value;

    this.authService.register(name, secondname, surname, secondsurname, email, password, typeloan).subscribe((ok) => {
      console.log(ok);
      if ( ok === true ){
        this.router.navigateByUrl('/dashboard/solicitud')
      }else{
        Swal.fire('Error', ok, 'error')
      }
    });
  }



  public hideModel() {
    this.closeModal.nativeElement.click();
    this.closeModal1.nativeElement.click();
  }



  ngOnInit(): void { }



  derecha() {
    if (!this.correr) {
      (this.correr = true);
    } else {
      (this.correr = false);
    }
  }

}
