import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthModule } from '../auth/auth.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { ConstruccionComponent } from './pages/landingv2/construccion/construccion.component';
import { HipotecaComponent } from './pages/landingv2/hipoteca/hipoteca.component';
import { InvierteComponent } from './pages/landingv2/invierte/invierte.component';
import { Main2Component } from './pages/landingv2/main2/main2.component';
import { One2Component } from './pages/landingv2/one2/one2.component';
import { PersonalesComponent } from './pages/landingv2/personales/personales.component';
import { VehiculosComponent } from './pages/landingv2/vehiculos/vehiculos.component';
import { Main3Component } from './pages/landingv3/main3/main3.component';
import { One3Component } from './pages/landingv3/one3/one3.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { Page4Component } from './pages/page4/page4.component';
import { Page5Component } from './pages/page5/page5.component';
import { QuickFormsComponent } from './pages/quick-forms/quick-forms.component';
import { QuickloanComponent } from './pages/quickloan/quickloan.component';



@NgModule({
  declarations: [
    LandingComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    ConstruccionComponent,
    HipotecaComponent,
    InvierteComponent,
    Main2Component,
    One2Component,
    PersonalesComponent,
    VehiculosComponent,
    Main3Component,
    One3Component,
    QuickloanComponent,
    QuickFormsComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AuthModule,

  ]
})
export class LandingModule { }
