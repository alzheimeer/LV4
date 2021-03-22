import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.models';
import { DashboardService } from '../../auth/services/dashboard.service';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  public usuarios: User[] = [];
  hayerror = false;

  constructor(private router: Router, private dashboardService: DashboardService, ) { }

   ngOnInit(): void {
    this.dashboardService.getUsers()
    .subscribe(resp => {
      this.usuarios = resp;
      console.log(this.usuarios[0].name);
    }, (err) => {
      this.hayerror = true;
      console.log( 'Error' );
    });
  }
}
