import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CreateRequest, Request } from '../../models/request.models';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private baseUrl: string = environment.baseUrl;
  private _solicitud!: Request;

  get solicitud() {
    return { ...this._solicitud };
  }

  constructor(private http: HttpClient) { }


  public createRequest( solicitud: CreateRequest) {
    const url = `${this.baseUrl}/request`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
    return this.http.post<CreateRequest>(url, solicitud, {headers});
  }

  public getRequests(): Observable<Request[]> {
    const url = `${this.baseUrl}/request`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
    return this.http.get<Request[]>(url, {headers});
  }

  public getRequestById(id: any): Observable<Request> {
    const url = `${this.baseUrl}/request/${id}`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
    return this.http.get<Request>(url, {headers});
  }

  public getRequestByIdUser(id: any): Observable<Request> {
    const url = `${this.baseUrl}/request/user/${id}`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
    return this.http.get<Request>(url, {headers});
  }

  public updateRequestsById( solicitud: Request ){
    const url = `${this.baseUrl}/request`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
    return this.http.put(`${ url }/${ solicitud._id }`, solicitud, {headers});
  }

  public deleteRequestById( id: any ){
    const url = `${this.baseUrl}/request/${id}`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
    return this.http.delete(url, {headers});
  }

}

