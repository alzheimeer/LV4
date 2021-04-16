import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User } from '../../models/user.models';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _refresh$ = new Subject<void>();

  private baseUrl: string = environment.baseUrl;
  private _usuario!: User;

  get usuario() {
    return { ...this._usuario };
  }

  get refresh$() {
    return this._refresh$;
  }

  constructor(private http: HttpClient) { }

  public createUser( usuario: User) {
    const url = `${this.baseUrl}/users`;
    return this.http.post<User>(url, usuario);
  }

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

  public updateUserByIdX(id: string, tipodoc: string, fechaNac: Date, fechaExp: Date, pais: string,
    departamento: string, ciudad: string, barrio: string, direccion: string, numdoc: number,
    celular1: number, celular2: number, banco: string, tipocuenta: string, numcuenta: number) {
    const url = `${this.baseUrl}/users`;
    const body = {
      personal: {
        tipodoc,
        fechaNac,
        fechaExp,
        pais,
        departamento,
        ciudad,
        barrio,
        direccion,
        numdoc,
        celular1,
        celular2,
      },
      banca: {
        banco,
        tipocuenta,
        numcuenta,
      }
    };
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this.http.put(`${url}/${id}`, body, { headers });
  }
  public updateUserByIdPhoto(id: string, photo: File) {
    const url = `${this.baseUrl}/users/avatar`;
    const fd = new FormData();
    fd.append('avatar', photo);
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this.http.put(`${url}/${id}`, fd, { headers }).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  public updateUserByIdCedula(id: string, photoCedula: File) {
    const url = `${this.baseUrl}/users/cedula`;
    const fd = new FormData();
    fd.append('cedula', photoCedula);
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this.http.put(`${url}/${id}`, fd, { headers })
      .pipe(
        tap(() => {
          this._refresh$.next();
        })
      );
  }

  public updateUserByIdPasaporte(id: string, photoPasaporte: File) {
    const url = `${this.baseUrl}/users/pasaporte`;
    const fd = new FormData();
    fd.append('pasaporte', photoPasaporte);
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this.http.put(`${url}/${id}`, fd, { headers }).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  public deleteUserById( id: any ){
    const url = `${this.baseUrl}/users/${id}`;
    return this.http.delete(url);
  }

}
