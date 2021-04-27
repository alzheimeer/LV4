import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestIni, Requestx } from 'src/app/models/request.models';

import { UsuarioIni } from '../../models/user.models';
import { RequestService } from '../services/request.service';
import { UserService } from '../services/user.service';
import { environment } from './../../../environments/environment';
import { User } from './../../models/user.models';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.scss']
})
export class EstudioComponent implements OnInit {
  @Input()
  idUser = '';

  @Input()
  idSolicitud = '';

  solicitud: Requestx = new RequestIni();
  usuario: User = new UsuarioIni();
  baseUrlN: string = environment.baseUrlN;
  flaqrefFamiliares = false;
  flaqrefComerciales = false;

  constructor(private requestService: RequestService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUserById(this.idUser)
      .subscribe(resp => {
        this.usuario = resp;
      });
    this.requestService.getRequestById(this.idSolicitud)
      .subscribe(res => {
        this.solicitud = res;
      });

  }

  MRefFamiliares() {
    if (this.flaqrefFamiliares === false) { this.flaqrefFamiliares = true }
    if (this.flaqrefFamiliares === true) { this.flaqrefFamiliares = false }

  }
  MRefComerciales() {
    if (this.flaqrefComerciales === false) { this.flaqrefComerciales = true }
    if (this.flaqrefComerciales === true) { this.flaqrefComerciales = false }

  }
}
