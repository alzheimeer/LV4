import { Component, OnInit, HostBinding, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';


declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard/solicitud', title: 'Solicitud', icon: 'space_dashboard', class: 'x' },
  { path: '/dashboard/datosinmueble', title: 'Datos Inmueble', icon: 'verified', class: 'x' },
  { path: '/dashboard/datospersonales', title: 'Datos Personales', icon: 'verified', class: 'x' },
  { path: '/dashboard/datosvehiculo', title: 'Datos Vehiculo', icon: 'verified', class: 'x' },
  { path: '/dashboard/datosconstruccion', title: 'Datos Construccion', icon: 'verified', class: 'x' },
  { path: '/dashboard/usuarios', title: 'Usuarios', icon: 'groups', class: 'x' },
  { path: '/dashboard/estadocuenta', title: 'Pagar Cuota', icon: 'savings', class: 'x' },
  { path: '/dashboard/misdatos', title: 'Mi Cuenta', icon: 'person', class: 'x' }
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})



export class DashboardComponent implements OnInit {
  y:number = 0;
  opened: boolean = true;
  menuItems!: any[];

  get usuario() {
    return this.authService.usuario;
  }

  // Seccion que detecta pantalla pequeña y se colapsa el sidebar
  isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
    this.opened = !this.isSmallScreen;
    this.y = window.innerWidth;
   // console.log(window.innerWidth);
  }

  constructor(public breakpointObserver: BreakpointObserver,  private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  logout() {
    this.router.navigateByUrl('/landing');
    this.authService.logout();
  }
}
