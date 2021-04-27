import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { CreateRequest, Requestx } from '../../models/request.models';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private _refresh$ = new Subject<void>();
  private baseUrl: string = environment.baseUrl;
  private _solicitud!: Requestx;

  get solicitud() {
    return { ...this._solicitud };
  }
  get refresh$() {
    return this._refresh$;
  }
  constructor(private http: HttpClient) { }


  public createRequest( solicitud: CreateRequest) {
    const url = `${this.baseUrl}/request`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
    return this.http.post<CreateRequest>(url, solicitud, {headers});
  }

  public getRequests(): Observable<Requestx[]> {
    const url = `${this.baseUrl}/request`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
    return this.http.get<Requestx[]>(url, {headers});
  }

  public getRequestById(id: any): Observable<Requestx> {
    const url = `${this.baseUrl}/request/${id}`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
    const x = this.http.get<Requestx>(url, { headers });
    return x;
  }

  public getRequestByIdUser(id: any): Observable<Requestx[]> {
    const url = `${this.baseUrl}/request/user/${id}`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
    return this.http.get<Requestx[]>(url, {headers});
  }

  public updateRequestsById(solicitud: any) {
    const url = `${this.baseUrl}/request`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
    return this.http.put(`${url}/${solicitud._id}`, solicitud, { headers });
  }

  public updateRequestsByIdNumdoc(id: string, numdoc: string) {
    const url = `${this.baseUrl}/request/`;
    const body = {
      numdoc
    };
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this.http.put(`${url}/${id}`, body, { headers });
  }

  public updateRequestsByIdMiSolicitud(solicitud: any) {
    const url = `${this.baseUrl}/request`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
    return this.http.put(`${url}/${solicitud._id}`, solicitud, { headers })
      .pipe(
        tap(() => {
          this._refresh$.next();
        })
      );
  }

  public updateRequestsByIdInmueble(id: string, tipo: string, matricula: string, uso: string, estrato: number,
                                    departamento: string, ciudad: string, barrio: string, direccion: string,
                                    antiguedad: number, area: number, valorComercial: number) {
    const url = `${this.baseUrl}/request`;
    const body = {
      regInmuebleOk: true, inmueble: {
        tipo, matricula, uso, estrato,
        departamento, ciudad, barrio, direccion, antiguedad, area, valorComercial
      }
    };
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this.http.put(`${url}/${id}`, body, { headers });
  }

  public updateRequestsByIdVehiculo(id: string, tipo: string, placa: string, modelo: number, tipoCaja: string,
                                    linea: string, marca: string, kilometraje: number, tipoPlaca: string, unicoDueno: string) {
    const url = `${this.baseUrl}/request`;
    const body = { regVehiculoOk: true, vehiculo: { tipo, placa, modelo, tipoCaja, linea, marca, kilometraje, tipoPlaca, unicoDueno } };
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this.http.put(`${url}/${id}`, body, { headers });
  }

  public updateRequestsByIdTrabajoEmpleado(id: string, tiempo: number, ingreso: number, direccion: string,
                                           telefono: number, jefe: string, cargo: string) {
    const url = `${this.baseUrl}/request`;
    const body = { regTrabajoOk: true, trabajoEmpleado: { tiempoTrabajando: tiempo, ingresoMensual: ingreso, direccion, telefono, jefeInmediato: jefe, cargoActual: cargo } };
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this.http.put(`${url}/${id}`, body, { headers });
  }

  public updateRequestsByIdTrabajoIndependiente(id: string, tiempo: number, ingreso: number, direccion: string,
                                                telefono: number, actividadComercial: string) {
    const url = `${this.baseUrl}/request`;
    const body = { regTrabajoOk: true, trabajoIndependiente: { tiempoTrabajando: tiempo, ingresoMensual: ingreso, direccion, telefono, actividadComercial } };
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this.http.put(`${url}/${id}`, body, { headers });
  }

  public updateRequestsByIdTrabajoEmpresa(id: string, nombre: string, nit: string, ingresoMensual: number,
                                          direccion: string, telefono: number, actividadComercial: string) {
    const url = `${this.baseUrl}/request`;
    const body = { regTrabajoOk: true, trabajoEmpresa: { nombre, nit, ingresoMensual, direccion, telefono, actividadComercial } };
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this.http.put(`${url}/${id}`, body, { headers });
  }

  public updateRequestsByIdRefFam(id: string, nombre1: string, parentezco1: string, direccion1: string, celular1: number, nombre2: string, parentezco2: string, direccion2: string, celular2: number, nombre3: string, parentezco3: string, direccion3: string, celular3: number) {
    const url = `${this.baseUrl}/request`;
    const body = {
      regReferenciasOk: true,
      refFamiliar1: { nombre: nombre1, parentezco: parentezco1, direccion: direccion1, celular: celular1 },
      refFamiliar2: { nombre: nombre2, parentezco: parentezco2, direccion: direccion2, celular: celular2 },
      refFamiliar3: { nombre: nombre3, parentezco: parentezco3, direccion: direccion3, celular: celular3 },
    };
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this.http.put(`${url}/${id}`, body, { headers });
  }

  public updateRequestsByIdRefCom(id: string, nombre1: string, empresa1: string, direccion1: string, celular1: number, nombre2: string, empresa2: string, direccion2: string, celular2: number, nombre3: string, empresa3: string, direccion3: string, celular3: number) {
    const url = `${this.baseUrl}/request`;
    const body = {
      regReferenciasComOk: true,
      refComercial1: { nombre: nombre1, empresa: empresa1, direccion: direccion1, celular: celular1 },
      refComercial2: { nombre: nombre2, empresa: empresa2, direccion: direccion2, celular: celular2 },
      refComercial3: { nombre: nombre3, empresa: empresa3, direccion: direccion3, celular: celular3 },
    };
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this.http.put(`${url}/${id}`, body, { headers });
  }

  public updateRequestsByIdResultadoCalificacion(id: string, resultado: string, calificacion: number) {
    const url = `${this.baseUrl}/request`;
    const body = {
      resultado,
      calificacion
    };
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this.http.put(`${url}/${id}`, body, { headers });
  }

  public updateRequestsByIdFechaConsignacion(id: string, fechaConsignacion: Date) {
    const url = `${this.baseUrl}/request`;
    const body = {
      fechaConsignacion
    };
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this.http.put(`${url}/${id}`, body, { headers });
  }

  public updateRequestsByIdTarjetav(id: string, docTarjetav: File) {
    const url = `${this.baseUrl}/request/tarjetav`;
    const fd = new FormData();
    fd.append('tarjetav', docTarjetav);
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this.http.put(`${url}/${id}`, fd, { headers });
  }
  public updateRequestsByIdMatricula(id: string, docMatricula: File) {
    const url = `${this.baseUrl}/request/matricula`;
    const fd = new FormData();
    fd.append('matricula', docMatricula);
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this.http.put(`${url}/${id}`, fd, { headers });
  }
  public updateRequestsByIdExtracto(id: string, docExtracto: File) {
    const url = `${this.baseUrl}/request/extracto`;
    const fd = new FormData();
    fd.append('extracto', docExtracto);
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this.http.put(`${url}/${id}`, fd, { headers });
  }




  public deleteRequestById( id: any ){
    const url = `${this.baseUrl}/request/${id}`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
    return this.http.delete(url, { headers });
  }

}

