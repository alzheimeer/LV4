import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {

  get usuario(): any {
    return this.authService.usuario;
  }

  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //Traemos los roles que son requerido para entrar a la ruta
    let roles = route.data.roles as Array<string>;
    let roleDeUsuario = '';
    let ok = 0;
    // Comprobamos si el usuario tiene este role y devolvemos true o false
    let role = sessionStorage.getItem('a');
    if (role === '79') { roleDeUsuario = 'admin' }
    if (role === '152') { roleDeUsuario = 'moderator' }
    if (role === '0') { roleDeUsuario = 'user' }
    roles.forEach(rol => {
      if (rol === roleDeUsuario) {
        ok = 1;
      }
    });

    if (ok === 0) {
      // alert('No Tienes Permisos Para Esta Seccion');
      this.router.navigateByUrl('/dashboard/misdatos');
      return false;

    }
    if (ok === 1) { return true; }
    return false;
  }

}
