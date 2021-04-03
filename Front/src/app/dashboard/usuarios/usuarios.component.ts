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

  public usuarios: User[] = [];
  public roles: Role[] = [];
  hayerror = false;
  element = false;


  constructor(private router: Router, private userService: UserService, private roleService: RoleService ) { }

   ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(resp => {
      this.usuarios = resp;
      // console.log(this.usuarios[0].name);
    }, (err) => {
      this.hayerror = true;
      console.log( 'Error' );
    });


    this.roleService.getRoles()
    .subscribe(resp2 => {
      this.roles = resp2;
      console.log(this.roles)
    })


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
      usuario.roles = valorinput;
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
