import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth/services/auth.service';
import { Bill, BillIni } from '../../models/bill.models';
import { RequestMao, Requestx } from '../../models/request.models';
import { BillService } from '../services/bill.service';
import { RequestService } from '../services/request.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-estadocuenta',
  templateUrl: './estadocuenta.component.html',
  styleUrls: ['./estadocuenta.component.scss']
})
export class EstadocuentaComponent implements OnInit {

  bills: Bill[] = [];
  bill: Bill = new BillIni();
  solicitud: Requestx = new RequestMao();

  get usuario(): any {
    return this.authService.usuario;
  }

  constructor(
    public billService: BillService,
    private authService: AuthService,
    private requestService: RequestService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.requestService.getRequestById(this.usuario.solicitud).subscribe((r) => {
      this.solicitud = r;
      console.log(this.solicitud);
      // r.fechasFacturacion.forEach(element => {
      //   this.billService.getBillById(element.idRecibo).subscribe((s) => {
      //     this.bills.push(s);
      //   })
      // });
    })
    // console.log(this.bills);
  }

  verFactura(idRecibo: any) {
    this.billService.getBillById(idRecibo).subscribe((bill) => {
      this.bill = bill;
      console.log(this.bill)
    });
  }
}
