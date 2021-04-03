import { HttpClient } from '@angular/common/http';
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

  public createBill( bill: Bill) {
    const url = `${this.baseUrl}/bills`;
    return this.http.post<Bill>(url, bill);
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
    return this.http.put(`${ url }/${ bill._id }`, bill);
  }

  public deleteBillById( id: any ){
    const url = `${this.baseUrl}/bills/${id}`;
    return this.http.delete(url);
  }

}
