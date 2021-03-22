import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CalcComponent } from './calc/calc.component';
import { RequisitoPersonalComponent } from './requisito-personal/requisito-personal.component';
import { MaterialModule } from "../material/material.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequisitoHipotecaComponent } from './requisito-hipoteca/requisito-hipoteca.component';
import { RequisitoVehiculoComponent } from './requisito-vehiculo/requisito-vehiculo.component';
import { RequisitoConstruccionComponent } from './requisito-construccion/requisito-construccion.component';
import { CalcHipotecaComponent } from './calc-hipoteca/calc-hipoteca.component';
import { CalcVehiculoComponent } from './calc-vehiculo/calc-vehiculo.component';
import { CalcConstruccionComponent } from './calc-construccion/calc-construccion.component';
import { CalcInvierteComponent } from './calc-invierte/calc-invierte.component';



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
    CalcHipotecaComponent,
    CalcVehiculoComponent,
    CalcConstruccionComponent,
    CalcInvierteComponent,
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
  ]
})
export class SharedModule { }
