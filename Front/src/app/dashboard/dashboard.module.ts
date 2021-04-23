import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedDashboardModule } from '../shared-dashboard/shared-dashboard.module';
import { MaterialModule } from '../material/material.module';

import { DashboardComponent } from './dashboard.component';
import { DatosconstruccionComponent } from './datosconstruccion/datosconstruccion.component';
import { DatosinmuebleComponent } from './datosinmueble/datosinmueble.component';
import { DatospersonalesComponent } from './datospersonales/datospersonales.component';
import { DatosvehiculoComponent } from './datosvehiculo/datosvehiculo.component';
import { EstadocuentaComponent } from './estadocuenta/estadocuenta.component';
import { MisdatosComponent } from './misdatos/misdatos.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AboutComponent } from './about/about.component';
import { ProductoComponent } from './producto/producto.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { MisolicitudComponent } from './misolicitud/misolicitud.component';

import { SearchnameproductPipe } from './pipes/searchnameproduct.pipe';
import { DatostrabajoComponent } from './datostrabajo/datostrabajo.component';
import { DatosreferenciasComponent } from './datosreferencias/datosreferencias.component';
import { DatosreferenciacomComponent } from './datosreferenciacom/datosreferenciacom.component';
import { FilterforamountPipe } from './pipes/filterforamount.pipe';



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
    MisolicitudComponent,
    DatostrabajoComponent,
    DatosreferenciasComponent,
    DatosreferenciacomComponent,
    FilterforamountPipe,
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
