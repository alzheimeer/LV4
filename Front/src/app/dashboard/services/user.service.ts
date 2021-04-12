import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { User } from '../../models/user.models';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: User;

  get usuario() {
    return { ...this._usuario };
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

  public updateUserByIdX(id: string, tipodoc: string, pais: string, departamento: string, ciudad: string, barrio: string, direccion: string, numdoc: number, celular1: number, celular2: number, banco: string, tipocuenta: string, numcuenta: number) {
    const url = `${this.baseUrl}/users`;
    const body = {
      'personal': {
        'tipodoc': tipodoc,
        'pais': pais,
        'departamento': departamento,
        'ciudad': ciudad,
        'barrio': barrio,
        'direccion': direccion,
        'numdoc': numdoc,
        'celular1': celular1,
        'celular2': celular2,
      },
      'banca': {
        'banco': banco,
        'tipocuenta': tipocuenta,
        'numcuenta': numcuenta,
      }
    };
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this.http.put(`${url}/${id}`, body, { headers });
  }
  public updateUserByIdPhoto(id: string, photo: File) {
    const url = `${this.baseUrl}/users/avatar`;
    const fd = new FormData();
    fd.append('avatar', photo);
    console.log('fd', fd)
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    console.log(id)
    return this.http.put(`${url}/${id}`, fd, { headers });
  }

  public deleteUserById( id: any ){
    const url = `${this.baseUrl}/users/${id}`;
    return this.http.delete(url);
  }

}
