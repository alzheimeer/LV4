import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  PUltrarapido = true;
  PPersonales = false;
  PConstruccion = true;
  PVehiculo = true;
  PHipoteca = true;
  PInvierte = true;

  constructor(private router: Router, public dataService: DataService) { }

  ngOnInit(): void {
  }



}
