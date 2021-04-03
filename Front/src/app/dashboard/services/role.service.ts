import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Role } from '../../models/role.models';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseUrl: string = environment.baseUrl;
  private _role!: Role;

  get role() {
    return { ...this._role };
  }

  constructor(private http: HttpClient) { }

  public createRole( role: Role) {
    const url = `${this.baseUrl}/roles`;
    return this.http.post<Role>(url, role);
  }

  public getRoles(): Observable<Role[]> {
    const url = `${this.baseUrl}/roles`;
    return this.http.get<Role[]>(url);
  }

  public getRoleById(id: any): Observable<Role> {
    const url = `${this.baseUrl}/roles/${id}`;
    return this.http.get<Role>(url);
  }

  public updateRoleById( role: Role ){
    const url = `${this.baseUrl}/roles`;
    return this.http.put(`${ url }/${ role._id }`, role);
  }

  public deleteRoleById( id: any ){
    const url = `${this.baseUrl}/roles/${id}`;
    return this.http.delete(url);
  }

}
