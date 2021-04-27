import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { SharedDashboardModule } from '../shared-dashboard/shared-dashboard.module';
import { AboutComponent } from './about/about.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
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
import { FilterforamountPipe } from './pipes/filterforamount.pipe';
import { SearchnameproductPipe } from './pipes/searchnameproduct.pipe';
import { ProductoComponent } from './producto/producto.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';



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
    EstudioComponent,
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
