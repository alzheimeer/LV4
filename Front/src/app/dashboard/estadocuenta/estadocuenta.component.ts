import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { environment } from '../../../environments/environment';
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
  file!: File;
  MAXIMO_TAMANIO_BYTES = 4000000; // 1MB = 1 millón de bytes
  buttonSelect0 = false;
  baseUrlN: string = environment.baseUrlN;
  pcomprobante = '';

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
      r.fechasFacturacion.forEach(element => {
        this.billService.getBillById(element.idRecibo).subscribe((s) => {
          this.bills.push(s);
        })
      });
    })
    // console.log(this.bills);
  }

  verFactura(idRecibo: any) {
    this.billService.getBillById(idRecibo).subscribe((bill) => {
      this.bill = bill;
      console.log(this.bill)
    });
  }



  onDocSelected(event: any, tipo: string): void {
    if (tipo === 'comprobante') {
      if (event.target.files && event.target.files[0]) {
        this.file = (event.target.files[0] as File);
        if (this.file.size > this.MAXIMO_TAMANIO_BYTES) {
          const tamanioEnMb = this.MAXIMO_TAMANIO_BYTES / 1000000;
          alert(`El tamaño máximo es ${tamanioEnMb} MB`);
          // Limpiar
          this.buttonSelect0 = false;
          return;
        }
        if (!this.file) {
          this.buttonSelect0 = false;
        }
        else {
          this.buttonSelect0 = true;
        }
      }
    }
  }


  uploadComprobante(idRecibo: string, tipo: string): void {
    //  console.log('SSUBE DOC');
    if (tipo === 'comprobante') {
      this.billService.updateBillByIdComprobante(idRecibo, this.file).subscribe((rta) => {
        Swal.fire({
          title: 'OK',
          text: 'Documento Enviado',
          icon: 'success',
        });
        this.ngOnInit();

      });

    }
  }
}
