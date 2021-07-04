import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Role } from '../../models/role.models';
import { User } from '../../models/user.models';
import { RoleService } from '../services/role.service';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  checkedUser = false;
  checkedModerator = false;
  checkedAdmin = false;
  idAdmin = '';
  idModerator = '';
  idUser = '';


  page1 = 0;
  page2 = 0;
  page3 = 0;
  search1 = '';
  search2 = '';
  search3 = '';
  tiposearch = 'firstName';
  p = '';
  UserToDelete: any = [];


  public usuarios: User[] = [];
  public roles: Role[] = [];
  hayerror = false;
  element = false;
  public tiposIdentificacion = ['Cedula De Ciudadania', 'Cedula De Extranjeria'];
  public paises = ['Colombia', 'Venezuela', 'Brazil', 'Argentina', 'Peru', 'Chile', 'Ecuador', 'Bolivia', 'Uruguay', 'Paraguay', 'Otro'];
  public tiposcuenta = ['Cuenta De Ahorros', 'Cuenta Corriente'];
  public bancos = [
    'Banco de Bogota',
    'Banco Popular',
    'Banco CorpBanca',
    'Bancolombia',
    'Citibank',
    'Banco GNB Sudameris',
    'BBVA Colombia',
    'Banco De Occidente',
    'Banco Caja Social',
    'Davivienda',
    'Scotiabanck',
    'Banagrario',
    'AV Villas',
    'Scotiabank', ];

  public productos = [
      { name: 'Tipo De Prestamo', value: 'typeloan' },
      { name: 'ID Usuario', value: 'id' },
      { name: 'ID Solicitud', value: 'solicitud' },
      { name: 'Primer Apellido', value: 'surname' },
      { name: 'Segundo Apellido', value: 'secondsurname' },
      { name: 'Primer Nombre', value: 'name' },
      { name: 'Segundo Nombre', value: 'secondname' },
      { name: 'Email', value: 'email' },
      { name: 'País', value: 'pais' },
      { name: 'Departamento', value: 'departamento' },
      { name: 'Ciudad', value: 'ciudad' },
      { name: 'Tipo De Documento', value: 'tipodoc' },
      { name: 'Numero De Documento', value: 'numdoc' }
  ];

  constructor(private router: Router, private userService: UserService, private roleService: RoleService ) { }

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(resp => {
      this.usuarios = resp;
      console.log(resp)
    });
    this.roleService.getRoles()
    .subscribe(resp2 => {
      this.roles = resp2;
      this.rolesM();
    });
  }

  nextPage(n: number): void {
    if (n === 1) { this.page1 += 10; }
    if (n === 2) { this.page2 += 10; }
    if (n === 3) { this.page3 += 10; }
  }
  prevPage(n: number): void {
    if (this.page1 > 0) { if (n === 1) { this.page1 -= 10; } }
    if (this.page2 > 0) { if (n === 2) { this.page2 -= 10; } }
    if (this.page3 > 0) { if (n === 3) { this.page3 -= 10; } }
  }
  choose(value: any) {
    if (value === 'typeloan') { this.tiposearch = 'typeloan'; }
    if (value === 'id') { this.tiposearch = 'id'; }
    if (value === 'name') { this.tiposearch = 'name'; }
    if (value === 'secondname') { this.tiposearch = 'secondname'; }
    if (value === 'surname') { this.tiposearch = 'surname'; }
    if (value === 'secondsurname') { this.tiposearch = 'secondsurname';  }
    if (value === 'pais') { this.tiposearch = 'pais'; }
    if (value === 'departamento') { this.tiposearch = 'departamento'; }
    if (value === 'ciudad') { this.tiposearch = 'ciudad'; }
    if (value === 'email') { this.tiposearch = 'email'; }
    if (value === 'tipodoc') { this.tiposearch = 'tipodoc'; }
    if (value === 'solicitud') { this.tiposearch = 'solicitud'; }
    if (value === 'numdoc') { this.tiposearch = 'numdoc'; }
    if (value === 'celular1') { this.tiposearch = 'celular1'; }
    if (value === 'genero') { this.tiposearch = 'genero'; }
    if (value === 'banco') { this.tiposearch = 'banco'; }
    if (value === 'numcuenta') { this.tiposearch = 'numcuenta'; }
  }
  searchSolicitud(valueSearch: string, n: number, tipo: string): void {
    if (n === 1) {
      this.page1 = 0;
      this.search1 = valueSearch;
    }
    if (n === 2) {
      this.page2 = 0;
      this.search2 = valueSearch;
    }
    if (n === 3) {
      this.page3 = 0;
      this.search3 = valueSearch;
    }
  }
  rolesM(): void {

    for (let j = 0; j < this.roles.length; j++) {

      if (this.roles[j].name === 'admin') {
       this.idAdmin = this.roles[j]._id;
      }
      if (this.roles[j].name === 'moderator') {
        this.idModerator = this.roles[j]._id;
      }
      if (this.roles[j].name === 'user') {
        this.idUser = this.roles[j]._id;
      }
    }

    // console.log('Admin:',this.idAdmin, 'Moderador:',this.idModerator, 'User:',this.idUser);
  }

  save(usuario: any, valorinput: any, campo: string){
    console.log(campo, valorinput);
    const usuarioTemp = usuario.campo;
    if (campo === 'name') { usuario.name = valorinput; }
    if (campo === 'surname') { usuario.surname = valorinput; }
    if (campo === 'email') { usuario.email = valorinput; }
    if (campo === 'tipodoc') { usuario.personal.tipodoc = valorinput; }
    if (campo === 'numdoc') { usuario.personal.numdoc = valorinput; }
    if (campo === 'pais') { usuario.personal.pais = valorinput; }
    if (campo === 'ciudad') { usuario.personal.ciudad = valorinput; }
    if (campo === 'barrio') { usuario.personal.barrio = valorinput; }
    if (campo === 'direccion') { usuario.personal.direccion = valorinput; }
    if (campo === 'celular1') { usuario.personal.celular1 = valorinput; }
    if (campo === 'celular2') { usuario.personal.celular2 = valorinput; }
    if (campo === 'banco') { usuario.banca.banco = valorinput; }
    if (campo === 'tipocuenta') { usuario.banca.tipocuenta = valorinput; }
    if (campo === 'numcuenta') { usuario.banca.numcuenta = valorinput; }
    if (campo === 'solicitud') { usuario.solicitud = valorinput; }
    if (campo === 'roles')
    {
      this.rolesM();
      if (valorinput === 'admin') {
        usuario.roles = [this.idUser, this.idModerator, this.idAdmin];
      }
      if (valorinput === 'moderator') {
        usuario.roles = [this.idUser, this.idModerator];
      }
      if (valorinput === 'user') {
        usuario.roles = [this.idUser];
      }
    }
    this.userService.updateUserById(usuario).subscribe(
      (res) => {
        console.log('OK');
      },
      (err) => {
        console.log(err);
        usuario.campo = usuarioTemp;
      }
    );
  }
}
