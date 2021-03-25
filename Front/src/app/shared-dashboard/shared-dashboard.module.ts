import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
// import { NavbarComponent } from './navbar/navbar.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    FooterComponent,
    ModalComponent,
    // NavbarComponent,
    // SidebarComponent,
    SliderComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    FooterComponent,
    ModalComponent,
    // NavbarComponent,
    // SidebarComponent,
    SliderComponent
  ]
})
export class SharedDashboardModule { }
