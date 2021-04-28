import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RolesGuard } from '../guards/roles.guard';
import { ValidarTokenGuard } from '../guards/validar-token.guard';
import { AboutComponent } from './about/about.component';
import { AprobadosComponent } from './aprobados/aprobados.component';
import { CarteraComponent } from './cartera/cartera.component';
import { DashboardComponent } from './dashboard.component';
import { DatosconstruccionComponent } from './datosconstruccion/datosconstruccion.component';
import { DatosinmuebleComponent } from './datosinmueble/datosinmueble.component';
import { DatospersonalesComponent } from './datospersonales/datospersonales.component';
import { DatosreferenciacomComponent } from './datosreferenciacom/datosreferenciacom.component';
import { DatosreferenciasComponent } from './datosreferencias/datosreferencias.component';
import { DatostrabajoComponent } from './datostrabajo/datostrabajo.component';
import { DatosvehiculoComponent } from './datosvehiculo/datosvehiculo.component';
import { EstadocuentaComponent } from './estadocuenta/estadocuenta.component';
import { EstudioComponent } from './estudio/estudio.component';
import { MisdatosComponent } from './misdatos/misdatos.component';
import { MisolicitudComponent } from './misolicitud/misolicitud.component';
import { ProductoComponent } from './producto/producto.component';
import { RechazadosComponent } from './rechazados/rechazados.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'solicitud', component: SolicitudComponent, canActivate: [ValidarTokenGuard, RolesGuard], data: { roles: ['user'] } },
      { path: 'misolicitud', component: MisolicitudComponent, canActivate: [ValidarTokenGuard, RolesGuard], data: { roles: ['user'] } },
      { path: 'estadocuenta', component: EstadocuentaComponent, canActivate: [ValidarTokenGuard, RolesGuard], data: { roles: ['user'] } },

      { path: 'datospersonales', component: DatospersonalesComponent, canActivate: [ValidarTokenGuard, RolesGuard], data: { roles: ['user'] } },
      { path: 'datostrabajo', component: DatostrabajoComponent, canActivate: [ValidarTokenGuard, RolesGuard], data: { roles: ['user'] } },
      { path: 'datosreferencias', component: DatosreferenciasComponent, canActivate: [ValidarTokenGuard, RolesGuard], data: { roles: ['user'] } },
      { path: 'datosreferenciascom', component: DatosreferenciacomComponent, canActivate: [ValidarTokenGuard, RolesGuard], data: { roles: ['user'] } },
      { path: 'datosinmueble', component: DatosinmuebleComponent, canActivate: [ValidarTokenGuard, RolesGuard], data: { roles: ['user'] } },
      { path: 'datosvehiculo', component: DatosvehiculoComponent, canActivate: [ValidarTokenGuard, RolesGuard], data: { roles: ['user'] } },
      { path: 'datosconstruccion', component: DatosconstruccionComponent, canActivate: [ValidarTokenGuard, RolesGuard], data: { roles: ['user'] } },
      { path: 'solicitudes', component: SolicitudesComponent, canActivate: [ValidarTokenGuard, RolesGuard], data: { roles: ['moderator', 'admin'] } },
      { path: 'aprobados', component: AprobadosComponent, canActivate: [ValidarTokenGuard, RolesGuard], data: { roles: ['moderator', 'admin'] } },
      { path: 'rechazados', component: RechazadosComponent, canActivate: [ValidarTokenGuard, RolesGuard], data: { roles: ['moderator', 'admin'] } },
      { path: 'cartera', component: CarteraComponent, canActivate: [ValidarTokenGuard, RolesGuard], data: { roles: ['moderator', 'admin'] } },
      { path: 'productos', component: ProductoComponent, canActivate: [ValidarTokenGuard, RolesGuard], data: { roles: ['admin'] } },
      { path: 'usuarios', component: UsuariosComponent, canActivate: [ValidarTokenGuard, RolesGuard], data: { roles: ['admin'] } },
      { path: 'misdatos', component: MisdatosComponent, canActivate: [ValidarTokenGuard, RolesGuard], data: { roles: ['user', 'moderator', 'admin'] } },
      { path: 'about', component: AboutComponent, canActivate: [ValidarTokenGuard, RolesGuard], data: { roles: ['user', 'moderator', 'admin'] } },
      { path: 'estudio', component: EstudioComponent, canActivate: [ValidarTokenGuard, RolesGuard], data: { roles: ['moderator', 'admin'] } },

      { path: '**', redirectTo: 'misolicitud' },
    ],
  },
];


@NgModule({
  // imports: [RouterModule.forChild(routes)],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
