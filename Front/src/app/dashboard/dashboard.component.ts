import { Component, OnInit, HostBinding, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Role } from '../auth/interfaces';




declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard/solicitud', title: 'Solicitud', icon: 'space_dashboard', class: 'x' },
  { path: '/dashboard/solicitudes', title: 'Solicitudes', icon: 'space_dashboard', class: 'x' },
  { path: '/dashboard/productos', title: 'Productos', icon: 'space_dashboard', class: 'x' },
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
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  y: number = 0;
  opened: boolean = true;
  menuItems!: any[];
  public roles: Role[] = [];
  rolesUsuario: Array<string> = [];
  hayerror = false;
  admin = 0;

  get usuario() {
    return this.authService.usuario;
  }

  // Seccion que detecta pantalla pequeña y se colapsa el sidebar
  isSmallScreen = this.breakpointObserver.isMatched('(max-width: 768px)');
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 768px)'
    );
    this.opened = !this.isSmallScreen;
    // y nos dira el tamaño de la pantalla
    this.y = window.innerWidth;
    // console.log(y);
  }

  constructor(
    public breakpointObserver: BreakpointObserver,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getRoles().subscribe(
      (resp) => {
        this.roles = resp;
        this.usuario.roles?.map((id) => this.authService.getRoleById(id).subscribe(resp => {
          this.rolesUsuario.push(resp.name as string)
        }));
      });

    // this.menuItems = ROUTES.filter((menuItem) => menuItem);

  }

  logout() {
    // console.log(this.rolesUsuario)
    // let isadmin = this.rolesUsuario.indexOf('admin')
    // let isuser = this.rolesUsuario.indexOf('user')
    // let ismoderator = this.rolesUsuario.indexOf('moderator')




    // let s = this.usuario.roles?.map((x)=> {return x})

    // console.log(s![0])
    // console.log(this.usuario.roles[0])




    // console.log(this.rolesUsuario)

    // const resultado = this.roles.find( role => role.uid === 's' );
    // console.log(this.roles);
    // let u = this.roles.indexOf({'name':'user'})
    // console.log('u',u)
    this.authService.logout();
    this.router.navigateByUrl('/landing');
  }
}
