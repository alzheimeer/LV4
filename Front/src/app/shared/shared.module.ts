import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { CalcConstruccionComponent } from './calc-construccion/calc-construccion.component';
import { CalcHipotecaComponent } from './calc-hipoteca/calc-hipoteca.component';
import { CalcInvierteComponent } from './calc-invierte/calc-invierte.component';
import { CalcQuickloanComponent } from './calc-quickloan/calc-quickloan.component';
import { CalcVehiculoComponent } from './calc-vehiculo/calc-vehiculo.component';
import { CalcComponent } from './calc/calc.component';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterQuickloanComponent } from './register-quickloan/register-quickloan.component';
import { RegisterComponent } from './register/register.component';
import { RequisitoConstruccionComponent } from './requisito-construccion/requisito-construccion.component';
import { RequisitoHipotecaComponent } from './requisito-hipoteca/requisito-hipoteca.component';
import { RequisitoPersonalComponent } from './requisito-personal/requisito-personal.component';
import { RequisitoQuickloanComponent } from './requisito-quickloan/requisito-quickloan.component';
import { RequisitoVehiculoComponent } from './requisito-vehiculo/requisito-vehiculo.component';




@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    RegisterComponent,
    LoginComponent,
    CalcComponent,
    RequisitoPersonalComponent,
    RequisitoHipotecaComponent,
    RequisitoVehiculoComponent,
    RequisitoConstruccionComponent,
    RequisitoQuickloanComponent,
    CalcHipotecaComponent,
    CalcVehiculoComponent,
    CalcConstruccionComponent,
    CalcInvierteComponent,
    CalcQuickloanComponent,
    RegisterQuickloanComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule

  ],
  exports: [
    NavbarComponent,
    CardComponent,
    RegisterComponent,
    LoginComponent,
    CalcComponent,
    CalcHipotecaComponent,
    CalcVehiculoComponent,
    CalcConstruccionComponent,
    CalcInvierteComponent,
    RequisitoPersonalComponent,
    RequisitoHipotecaComponent,
    RequisitoVehiculoComponent,
    RequisitoConstruccionComponent,
    RequisitoQuickloanComponent,
    CalcQuickloanComponent,
    RegisterQuickloanComponent
  ]
})
export class SharedModule { }
