import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Bill } from '../../models/bill.models';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  private baseUrl: string = environment.baseUrl;
  private _bill!: Bill;

  get Bill() {
    return { ...this._bill };
  }

  constructor(private http: HttpClient) { }

  public createBill(idRequest: string, idUser: string, idProduct: string, numCuota: number): Observable<Bill> {
    const url = `${this.baseUrl}/bills/ini`;
    const body = {
      idRequest,
      idUser,
      idProduct,
      numCuota
    }
    return this.http.post<Bill>(url, body);
  }

  public getBills(): Observable<Bill[]> {
    const url = `${this.baseUrl}/bills`;
    return this.http.get<Bill[]>(url);
  }

  public getBillById(id: any): Observable<Bill> {
    const url = `${this.baseUrl}/bills/${id}`;
    return this.http.get<Bill>(url);
  }

  public updateBillById( bill: Bill ){
    const url = `${this.baseUrl}/bills`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.put(`${url}/${bill._id}`, bill, { headers });
  }

  public updateBillByIdConfRecibo(id: string, fechaDePago: string, valorPagado: string): Observable<Bill> {
    const url = `${this.baseUrl}/bills/comprobar`;
    const body = {
      fechaDePago,
      valorPagado
    };
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this.http.put<Bill>(`${url}/${id}`, body, { headers });
  }


  public updateBillByIdComprobante(id: string, docComprobante: File) {
    const url = `${this.baseUrl}/bills/comprobante`;
    const fd = new FormData();
    fd.append('comprobante', docComprobante);
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.put(`${url}/${id}`, fd, { headers });
  }

  public deleteBillById( id: any ){
    const url = `${this.baseUrl}/bills/${id}`;
    return this.http.delete(url);
  }

}
