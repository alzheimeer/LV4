import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../../models/user.models';

import { catchError, map, tap } from 'rxjs/operators';
import { AuthResponse, Usuario, GetUsers, Uxuario } from '../interfaces';
import { DataPersonalModel, DataPersonalModelComplet } from '../../models/datapersonal.models';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl: string = environment.baseUrl;
  // tslint:disable-next-line: variable-name
  private _usuario!: User;

  // tslint:disable-next-line: typedef
  get usuario() {
    return { ...this._usuario };
  }

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    const url = `${this.baseUrl}/users`;
    return this.http.get<User[]>(url);
  }

  public getUserById(id: any): Observable<User> {
    const url = `${this.baseUrl}/users/${id}`;
    return this.http.get<User>(url);
  }

  public updateUserById( usuario: User ){
    const url = `${this.baseUrl}/users`;
    return this.http.put(`${ url }/${ usuario._id }`, usuario);
  }

  completeUserById( data: DataPersonalModel ) {
    const url = `${this.baseUrl}/users`;
    const dataTemp = {
      ...data
    };

    delete dataTemp.id;
    const {tipodoc, numdoc, pais, departamento, ciudad, barrio, direccion, celular1, celular2, banco, tipocuenta, numcuenta} = dataTemp;
    const x = {
      personal: {
        tipodoc,
        numdoc,
        pais,
        departamento,
        ciudad,
        barrio,
        direccion,
        celular1,
        celular2
      },
        banca: {
          banco,
          tipocuenta,
          numcuenta
        }
    };
    console.log(x);
    return this.http.put(`${ url }/${ data.id }`, x);
  }
}
