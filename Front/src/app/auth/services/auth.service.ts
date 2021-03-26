import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { AuthResponse, Usuario,  Role, GetUsers, Uxuario } from '../interfaces';
import { DataPersonalModel, DataPersonalModelComplet } from '../../models/datapersonal.models';



@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario() {
    return { ...this._usuario};
  }

  constructor(private http: HttpClient) { }

  register(name: string, surname: string, email: string, password: string) {

    const url = `${ this.baseUrl }/auth/new`;
    const body = { name, surname, email, password};
    // return the observable
    return this.http.post<AuthResponse>(url, body).pipe(
      tap(({ok, token}) => {
        // If resp is Correct ok: true
        if (ok === true) {
          localStorage.setItem('token', token!);
        }
      }),
      map((resp) => resp.ok),
      catchError((err) => of(err.error.msg))
    );
  }

  // tslint:disable-next-line: typedef
  login(email: string, password: string) {

    const url = `${ this.baseUrl }/auth`;
    const body = { email, password};
    // return the observable
    return this.http.post<AuthResponse>(url, body).pipe(
      tap((resp) => {
        // If resp is Correct ok: true
        if (resp.ok === true) {
          // tslint:disable-next-line: no-non-null-assertion
          localStorage.setItem('token', resp.token!);
        }
      }),
      map((resp) => resp.ok),
      catchError((err) => of(err.error.msg))
    );
  }

  validarToken(): Observable<boolean> {
    const url = `${ this.baseUrl }/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
    // return this observable
    return this.http.get<AuthResponse>(url, {headers}).pipe(
      map(resp => {
        // console.log(resp);
        localStorage.setItem('token', resp.token!);
        this._usuario = {
          uid: resp.uid!,
          name: resp.name!,
          surname: resp.surname!,
          email: resp.email!,
          roles: resp.roles!
        };

        return resp.ok;
      }),
      catchError((err) => of(false))
    );
  }

  // tslint:disable-next-line: typedef
  logout() {
    localStorage.clear();
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


  getRoles(): Observable<Role[]> {
    const url = `${this.baseUrl}/roles`;
    return this.http.get<Role[]>(url);
  }

  getRoleById(id: any) {
    const url = `${this.baseUrl}/roles/${id}`;
    const role = this.http.get<Role>(url);
    return role
  }


}
