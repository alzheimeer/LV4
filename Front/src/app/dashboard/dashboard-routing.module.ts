import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ValidarTokenGuard } from '../guards/validar-token.guard';

import { SolicitudComponent } from './solicitud/solicitud.component';
import { DatospersonalesComponent } from './datospersonales/datospersonales.component';
import { DatosinmuebleComponent } from './datosinmueble/datosinmueble.component';
import { DatosvehiculoComponent } from './datosvehiculo/datosvehiculo.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EstadocuentaComponent } from './estadocuenta/estadocuenta.component';
import { DatosconstruccionComponent } from './datosconstruccion/datosconstruccion.component';
import { MisdatosComponent } from './misdatos/misdatos.component';
import { AboutComponent } from './about/about.component';
import { ProductoComponent } from './producto/producto.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';


const routes: Routes = [
  {
  path: '',
    component: DashboardComponent,
    children: [
  { path: 'solicitud',        component: SolicitudComponent, canActivate: [ValidarTokenGuard], canLoad: [ValidarTokenGuard] },
  { path: 'solicitudes',        component: SolicitudesComponent, canActivate: [ValidarTokenGuard], canLoad: [ValidarTokenGuard] },
  { path: 'productos',        component: ProductoComponent, canActivate: [ValidarTokenGuard], canLoad: [ValidarTokenGuard] },
  { path: 'datospersonales',  component: DatospersonalesComponent, canActivate: [ValidarTokenGuard], canLoad: [ValidarTokenGuard] },
  { path: 'datosinmueble',  component: DatosinmuebleComponent, canActivate: [ValidarTokenGuard], canLoad: [ValidarTokenGuard] },
  { path: 'datosvehiculo',    component: DatosvehiculoComponent, canActivate: [ValidarTokenGuard], canLoad: [ValidarTokenGuard] },
  { path: 'usuarios',         component: UsuariosComponent, canActivate: [ValidarTokenGuard], canLoad: [ValidarTokenGuard] },
  { path: 'estadocuenta',     component: EstadocuentaComponent, canActivate: [ValidarTokenGuard], canLoad: [ValidarTokenGuard] },
  { path: 'datosconstruccion',component: DatosconstruccionComponent, canActivate: [ValidarTokenGuard], canLoad: [ValidarTokenGuard] },
  { path: 'misdatos',         component: MisdatosComponent, canActivate: [ValidarTokenGuard], canLoad: [ValidarTokenGuard] },
  { path: 'about',         component: AboutComponent, canActivate: [ValidarTokenGuard], canLoad: [ValidarTokenGuard] },

  { path: '**', redirectTo: 'solicitud' },
],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
