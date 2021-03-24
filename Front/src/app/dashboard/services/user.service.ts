import { HttpClient } from '@angular/common/http';
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

  public deleteUserById( id: any ){
    const url = `${this.baseUrl}/users/${id}`;
    return this.http.delete(url);
  }

}
