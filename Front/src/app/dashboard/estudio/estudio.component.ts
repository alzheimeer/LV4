import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
  styleUrls: ['./estudio.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class EstudioComponent implements OnInit, AfterViewInit {
  @Input()
  idUser = '';

  @Input()
  idSolicitud = '';

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;



  displayedColumns: string[] = ['cuota', 'fecha', 'estado'];
  columnsToDisplay = ['cuota', 'fecha', 'estado'];
  expandedElement?: Requestx | null;
  dataSource: any = [];

  solicitud: Requestx = new RequestIni();
  usuario: User = new UsuarioIni();
  baseUrlN: string = environment.baseUrlN;
  flaqrefFamiliares = false;
  flaqrefComerciales = false;

  constructor(private requestService: RequestService, private userService: UserService, private router: Router) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.userService.getUserById(this.idUser)
      .subscribe(resp => {
        this.usuario = resp;
      });
    this.requestService.getRequestById(this.idSolicitud)
      .subscribe(res => {
        this.solicitud = res;
        this.dataSource = new MatTableDataSource(this.solicitud.fechasFacturacion);
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
