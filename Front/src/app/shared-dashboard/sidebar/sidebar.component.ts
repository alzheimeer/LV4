import { Component, OnInit, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [

  { path: '/dashboard/solicitud', title: 'Solicitud', icon: 'space_dashboard', class: '' },
  { path: '/dashboard/datosinmueble', title: 'Datos Inmueble', icon: 'verified', class: '' },
  { path: '/dashboard/datospersonales', title: 'Datos Personales', icon: 'verified', class: '' },
  { path: '/dashboard/datosvehiculo', title: 'Datos Vehiculo', icon: 'verified', class: '' },
  { path: '/dashboard/datosconstruccion', title: 'Datos Construccion', icon: 'verified', class: '' },
  { path: '/dashboard/usuarios', title: 'Usuarios', icon: 'groups', class: '' },
  { path: '/dashboard/estadocuenta', title: 'Pagar Cuota', icon: 'savings', class: '' },
  { path: '/dashboard/misdatos', title: 'Mi Cuenta', icon: 'person', class: '' }
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  opened: boolean = true;

  @HostBinding('class') componentCssClass: any;


  menuItems!: any[];
  get usuario() {
    return this.authService.usuario;
  }

  constructor(public overlayContainer: OverlayContainer, private router: Router, private authService: AuthService) { }

  public onSetTheme(e: string) {
    this.overlayContainer.getContainerElement().classList.add(e);
    this.componentCssClass = 0;
  }
  logout() {

    this.router.navigateByUrl('/landing');
    this.authService.logout();

  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
