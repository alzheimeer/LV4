import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DatosconstruccionComponent } from './datosconstruccion/datosconstruccion.component';
import { DatosinmuebleComponent } from './datosinmueble/datosinmueble.component';
import { DatospersonalesComponent } from './datospersonales/datospersonales.component';
import { DatosvehiculoComponent } from './datosvehiculo/datosvehiculo.component';
import { EstadocuentaComponent } from './estadocuenta/estadocuenta.component';
import { MisdatosComponent } from './misdatos/misdatos.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


@NgModule({
  declarations: [DashboardComponent, DatosconstruccionComponent, DatosinmuebleComponent, DatospersonalesComponent, DatosvehiculoComponent, EstadocuentaComponent, MisdatosComponent, SolicitudComponent, UsuariosComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
