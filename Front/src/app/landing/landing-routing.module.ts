import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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


const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: 'quickloan', component: QuickloanComponent },
      { path: 'quickforms', component: QuickFormsComponent },
      { path: 'personal', component: Page1Component },
      { path: 'vehiculo', component: Page2Component },
      { path: 'hipoteca', component: Page3Component },
      { path: 'construccion', component: Page4Component },
      { path: 'invierte', component: Page5Component },

      { path: '**', redirectTo: 'quickloan' },
    ],
  },
  {
    path: 'op2',
    component: Main2Component,
    children: [
      { path: 'one2', component: One2Component },
      { path: 'personales', component: PersonalesComponent },
      { path: 'hipoteca', component: HipotecaComponent },
      { path: 'vehiculos', component: VehiculosComponent },
      { path: 'construccion', component: ConstruccionComponent },
      { path: 'invierte', component: InvierteComponent },
      { path: '**', redirectTo: 'one2' },
    ],
  },
  {
    path: 'op3',
    component: Main3Component,
    children: [
      { path: 'one3', component: One3Component },
      { path: '**', redirectTo: 'one3' },
    ],
  },
  // { path: '**', redirectTo: 'op1' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
