import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { AuthResponse, Usuario,  GetUsers, Uxuario } from '../interfaces';
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





  // tslint:disable-next-line: typedef
  // updateUserById( data: DataPersonalModelComplet ) {
  //   const url = `${this.baseUrl}/users`;
  //   const dataTemp = {
  //     ...data
  //   };

  //   delete dataTemp.id;
  //   const {
  //     name,
  //     surname,
  //     email,
  //     tipodoc,
  //     numdoc,
  //     pais,
  //     departamento,
  //     ciudad,
  //     barrio,
  //     direccion,
  //     celular1,
  //     celular2,
  //     banco,
  //     tipocuenta,
  //     numcuenta,
  //   } = dataTemp;
  //   const x = {
  //     name,
  //     surname,
  //     email,
  //     personal: {
  //       tipodoc,
  //       numdoc,
  //       pais,
  //       departamento,
  //       ciudad,
  //       barrio,
  //       direccion,
  //       celular1,
  //       celular2
  //     },
  //       banca: {
  //         banco,
  //         tipocuenta,
  //         numcuenta
  //       }
  //   };
  //   console.log(x);
  //   return this.http.put(`${ url }/${ data.id }`, x);
  // }

  // tslint:disable-next-line: typedef
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

  // tslint:disable-next-line: typedef
  getUsers() {
    const url = `${this.baseUrl}/users`;
    // Hacemos la solicitud .get mandando el url tipado con la interfaz AllUsers
    return this.http.get<GetUsers>(url);
      // .pipe(
        // map(resp => {
          // La respuesta trae todo + el array de usuarios
          // console.log('Resp:', resp);
          // return resp.usuario.map(user => {
            // Filtramos solo el array de usuarios sin el resto
            // console.log('Resp.usuario.map:', user);

            // const x = Uxuario.uxuarioDesdeJson(user);
            // Solo sacamos los datos que necesitamos de cada usuario usando Uxuario
            // console.log(x.roles);
            // return x;
        //  });
        // })
      // );
  }

  // tslint:disable-next-line: typedef
  getUserById(id: any) {
    const url = `${this.baseUrl}/users/${id}`;

    // Hacemos la solicitud .get mandando el url tipado con la interfaz AllUsers
    return this.http.get<GetUsers>(url)
      .pipe(
        map(resp => {

          console.log('Resp:', resp);
          // const x = Uxuario.uxuarioDesdeJson(resp);
          // console.log('2Resp:', x);
          // return x;
          return resp;
          })
        );
  }


}
