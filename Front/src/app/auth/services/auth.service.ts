import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { DataPersonalModel } from '../../models/datapersonal.models';
import { AuthResponse, Role, Usuario } from '../interfaces';


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

  register(name: string, secondname: string, surname: string, secondsurname: string, email: string, password: string, typeloan: string) {

    const url = `${ this.baseUrl }/auth/new`;
    const body = { name, secondname, surname, secondsurname, email, password, typeloan };
    // return the observable
    return this.http.post<AuthResponse>(url, body).pipe(
      tap(({ ok, token, uid }) => {
        // If resp is Correct ok: true
        if (ok === true) {
          localStorage.setItem('token', token!);
          localStorage.setItem('id', uid!);
        }
      }),
      map((resp) => {
        // tslint:disable-next-line: no-non-null-assertion
        let y = resp.roles?.find((fruta: any) => fruta!.name === 'admin') === undefined;
        if (y === false) {
          sessionStorage.setItem('a', '79');
          return 'admin';
        }
        // tslint:disable-next-line: no-non-null-assertion
        y = resp.roles?.find((fruta: any) => fruta!.name === 'moderator') === undefined;
        if (y === false) {
          sessionStorage.setItem('a', '152')
          return 'moderator';

        }
        sessionStorage.setItem('a', '0');

        if (resp.typeloan === 'quickloan')
          return 'user200';
        return 'user';
      }),
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
          localStorage.setItem('id', resp.uid!);
        }
      }),
      map((resp) => {
        // tslint:disable-next-line: no-non-null-assertion
        let y = resp.roles?.find((fruta: any) => fruta!.name === 'admin') === undefined;
        if (y === false) {
          sessionStorage.setItem('a', '79');
          return 'admin';
        }
        // tslint:disable-next-line: no-non-null-assertion
        y = resp.roles?.find((fruta: any) => fruta!.name === 'moderator') === undefined;
        if (y === false) {
          sessionStorage.setItem('a', '152')
          return 'moderator';

        }
        sessionStorage.setItem('a', '0');
        if (resp.typeloan === 'quickloan')
          return 'user200';
        return 'user';
      }),
      catchError((err) => of(err.error.msg))
    );
  }

  validarToken(): Observable<boolean> {
    const url = `${ this.baseUrl }/auth/renew`;
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    // return this observable
    return this.http.get<AuthResponse>(url, {headers}).pipe(
      map(resp => {
        // console.log(resp);
        localStorage.setItem('token', resp.token!);
        this._usuario = {
          uid: resp.uid!,
          name: resp.name!,
          secondname: resp.secondname!,
          surname: resp.surname!,
          secondsurname: resp.secondsurname!,
          email: resp.email!,
          roles: resp.roles!,
          solicitud: resp.solicitud!,
        };

        return resp.ok;
      }),
      catchError((err) => of(false))
    );
  }

  // tslint:disable-next-line: typedef
  logout() {
    localStorage.clear();
    sessionStorage.clear();
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
    // console.log(x);
    return this.http.put(`${ url }/${ data.id }`, x);
  }

  updateSolicitudUserById( idUser: String, idSolicitud: String ) {
    const url = `${this.baseUrl}/users`;
    const x = {'solicitud': idSolicitud};
    return this.http.put(`${ url }/${ idUser }`, x);
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

  enviarEmail(nombre: string, email: string, celular: string, mensaje: string) {
    const url = `${this.baseUrl}/emails`;
    const body = { nombre, email, celular, mensaje };
    return this.http.post(url, body);
  }

}
