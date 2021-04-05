import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.models';
import { Role } from '../../models/role.models';
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
    'Scotiabank',]

  constructor(private router: Router, private userService: UserService, private roleService: RoleService ) { }

   ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(resp => {
      this.usuarios = resp;
    });


    this.roleService.getRoles()
    .subscribe(resp2 => {
      this.roles = resp2;
      this.rolesM();
    })



  }


  rolesM(){

    for (let j = 0; j < this.roles.length; j++) {

      if (this.roles[j].name == 'admin')
       this.idAdmin = this.roles[j]._id;
      if (this.roles[j].name == 'moderator')
        this.idModerator = this.roles[j]._id;
      if (this.roles[j].name == 'user')
        this.idUser = this.roles[j]._id;
    }

    // console.log('Admin:',this.idAdmin, 'Moderador:',this.idModerator, 'User:',this.idUser);
  }

  save(usuario:any, valorinput: any, campo:string){
    console.log(campo, valorinput);
    const usuarioTemp = usuario.campo;
    if(campo == 'name')
      usuario.name = valorinput;
    if(campo == 'surname')
      usuario.surname = valorinput;
    if(campo == 'email')
      usuario.email = valorinput;
    if(campo == 'tipodoc')
      usuario.personal.tipodoc = valorinput;
    if(campo == 'numdoc')
      usuario.personal.numdoc = valorinput;
    if(campo == 'pais')
      usuario.personal.pais = valorinput;
    if(campo == 'ciudad')
      usuario.personal.ciudad = valorinput;
    if(campo == 'barrio')
      usuario.personal.barrio = valorinput;
    if(campo == 'direccion')
      usuario.personal.direccion = valorinput;
    if(campo == 'celular1')
      usuario.personal.celular1 = valorinput;
    if(campo == 'celular2')
      usuario.personal.celular2 = valorinput;
    if(campo == 'banco')
      usuario.banca.banco = valorinput;
    if(campo == 'tipocuenta')
      usuario.banca.tipocuenta = valorinput;
    if(campo == 'numcuenta')
      usuario.banca.numcuenta = valorinput;
    if(campo == 'roles')
    {
      this.rolesM();


      if(valorinput == 'admin')
        usuario.roles = [this.idUser, this.idModerator, this.idAdmin];
      if(valorinput == 'moderator')
        usuario.roles = [this.idUser, this.idModerator];
      if(valorinput == 'user')
        usuario.roles = [this.idUser];


    }


    this.userService.updateUserById(usuario).subscribe(
      (res) => {
        console.log('OK');
        // usuario.campo = res;
      },
      (err) => {
        console.log(err);
        usuario.campo = usuarioTemp;
      }
    );
  }
}
