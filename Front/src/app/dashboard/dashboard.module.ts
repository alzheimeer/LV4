import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
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
import { MaterialModule } from '../material/material.module';
import { SharedDashboardModule } from '../shared-dashboard/shared-dashboard.module';

import { AboutComponent } from './about/about.component';
import { ProductoComponent } from './producto/producto.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { SearchnameproductPipe } from './pipes/searchnameproduct.pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    DatosconstruccionComponent,
    DatosinmuebleComponent,
    DatospersonalesComponent,
    DatosvehiculoComponent,
    EstadocuentaComponent,
    MisdatosComponent,
    SolicitudComponent,
    UsuariosComponent,
    AboutComponent,
    ProductoComponent,
    SolicitudesComponent,
    SearchnameproductPipe,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    SharedDashboardModule,
    FormsModule,

    ReactiveFormsModule

  ],
})
export class DashboardModule {}
