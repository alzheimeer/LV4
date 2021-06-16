import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { CreateRequest, Requestx } from '../../models/request.models';

@Injectable({
  providedIn: 'root',
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

  public createRequest(solicitud: CreateRequest) {
    const url = `${this.baseUrl}/request`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.post<Requestx>(url, solicitud, { headers });
  }

  public getRequests(): Observable<Requestx[]> {
    const url = `${this.baseUrl}/request`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.get<Requestx[]>(url, { headers });
  }

  public getRequestById(id: any): Observable<Requestx> {
    const url = `${this.baseUrl}/request/${id}`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    const x = this.http.get<Requestx>(url, { headers });
    return x;
  }

  public getRequestByIdUser(id: any): Observable<Requestx[]> {
    const url = `${this.baseUrl}/request/user/${id}`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.get<Requestx[]>(url, { headers });
  }

  public updateRequestsById(solicitud: any) {
    const url = `${this.baseUrl}/request`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.put(`${url}/${solicitud._id}`, solicitud, { headers });
  }

  public updateRequestsByIdNumdoc(id: string, numdoc: string) {
    const url = `${this.baseUrl}/request/`;
    const body = {
      numdoc,
    };
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.put(`${url}/${id}`, body, { headers });
  }

  public updateRequestsByIdMiSolicitud(solicitud: any) {
    const url = `${this.baseUrl}/request`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http
      .put(`${url}/${solicitud._id}`, solicitud, { headers })
      .pipe(
        tap(() => {
          this._refresh$.next();
        })
      );
  }

  public updateRequestsByIdInmueble(
    id: string,
    tipo: string,
    matricula: string,
    uso: string,
    estrato: number,
    departamento: string,
    ciudad: string,
    barrio: string,
    direccion: string,
    antiguedad: number,
    area: number,
    valorComercial: number
  ) {
    const url = `${this.baseUrl}/request`;
    const body = {
      regInmuebleOk: true,
      inmueble: {
        tipo,
        matricula,
        uso,
        estrato,
        departamento,
        ciudad,
        barrio,
        direccion,
        antiguedad,
        area,
        valorComercial,
      },
    };
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.put(`${url}/${id}`, body, { headers });
  }

  public updateRequestsByIdVehiculo(
    id: string,
    tipo: string,
    placa: string,
    modelo: number,
    tipoCaja: string,
    linea: string,
    marca: string,
    kilometraje: number,
    tipoPlaca: string,
    unicoDueno: string
  ) {
    const url = `${this.baseUrl}/request`;
    const body = {
      regVehiculoOk: true,
      vehiculo: {
        tipo,
        placa,
        modelo,
        tipoCaja,
        linea,
        marca,
        kilometraje,
        tipoPlaca,
        unicoDueno,
      },
    };
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.put(`${url}/${id}`, body, { headers });
  }

  public updateRequestsByIdTrabajoEmpleado(
    id: string,
    tiempo: number,
    ingreso: number,
    direccion: string,
    telefono: number,
    jefe: string,
    cargo: string
  ) {
    const url = `${this.baseUrl}/request`;
    const body = {
      regTrabajoOk: true,
      trabajoEmpleado: {
        tiempoTrabajando: tiempo,
        ingresoMensual: ingreso,
        direccion,
        telefono,
        jefeInmediato: jefe,
        cargoActual: cargo,
      },
    };
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.put(`${url}/${id}`, body, { headers });
  }

  public updateRequestsByIdTrabajoIndependiente(
    id: string,
    tiempo: number,
    ingreso: number,
    direccion: string,
    telefono: number,
    actividadComercial: string
  ) {
    const url = `${this.baseUrl}/request`;
    const body = {
      regTrabajoOk: true,
      trabajoIndependiente: {
        tiempoTrabajando: tiempo,
        ingresoMensual: ingreso,
        direccion,
        telefono,
        actividadComercial,
      },
    };
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.put(`${url}/${id}`, body, { headers });
  }

  public updateRequestsByIdTrabajoEmpresa(
    id: string,
    nombre: string,
    nit: string,
    ingresoMensual: number,
    direccion: string,
    telefono: number,
    actividadComercial: string
  ) {
    const url = `${this.baseUrl}/request`;
    const body = {
      regTrabajoOk: true,
      trabajoEmpresa: {
        nombre,
        nit,
        ingresoMensual,
        direccion,
        telefono,
        actividadComercial,
      },
    };
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.put(`${url}/${id}`, body, { headers });
  }

  // public updateRequestsByIdLaboralQuick(
  //   id: string,
  //   situacionlaboral: string,
  //   actividad: string,
  //   actividadcargo: string,
  //   antiguedadempresa: number,
  //   nombreempresa: string,
  //   telefonoempresa: string,
  //   uso: string,
  // ) {
  //   const url = `${this.baseUrl}/request`;
  //   const body = {
  //     regLaboralQuickOk: true,

  //     trabajoQuick: {
  //       situacionlaboral,
  //       actividad,
  //       actividadcargo,
  //       antiguedadempresa,
  //       nombreempresa,
  //       telefonoempresa,
  //       uso,
  //     },
  //   };
  //   const headers = new HttpHeaders().set(
  //     'x-token',
  //     localStorage.getItem('token') || ''
  //   );
  //   return this.http.put(`${url}/${id}`, body, { headers });
  // }


  // public updateRequestsByIdRefQuick(
  //   id: string,
  //   nombre1: string,
  //   apellido1: string,
  //   ciudad1: string,
  //   celular1: number,
  //   nombre2: string,
  //   apellido2: string,
  //   ciudad2: string,
  //   celular2: number,
  // ) {
  //   console.log(id, nombre1, apellido1, ciudad1, celular1)
  //   const url = `${this.baseUrl}/request`;
  //   const body = {
  //     regReferenciasQuickOk: true,

  //     refPersonalQuick: {
  //       nombre: nombre1,
  //       apellido: apellido1,
  //       ciudad: ciudad1,
  //       celular: celular1,
  //     },
  //     refFamiliarQuick: {
  //       nombre: nombre2,
  //       apellido: apellido2,
  //       ciudad: ciudad2,
  //       celular: celular2,
  //     },
  //   };
  //   const headers = new HttpHeaders().set(
  //     'x-token',
  //     localStorage.getItem('token') || ''
  //   );
  //   return this.http.put(`${url}/${id}`, body, { headers });
  // }


  public updateRequestsByIdRefFam(
    id: string,
    nombre1: string,
    parentezco1: string,
    direccion1: string,
    celular1: number,
    nombre2: string,
    parentezco2: string,
    direccion2: string,
    celular2: number,
    nombre3: string,
    parentezco3: string,
    direccion3: string,
    celular3: number
  ) {
    const url = `${this.baseUrl}/request`;
    const body = {
      regReferenciasOk: true,
      refFamiliar1: {
        nombre: nombre1,
        parentezco: parentezco1,
        direccion: direccion1,
        celular: celular1,
      },
      refFamiliar2: {
        nombre: nombre2,
        parentezco: parentezco2,
        direccion: direccion2,
        celular: celular2,
      },
      refFamiliar3: {
        nombre: nombre3,
        parentezco: parentezco3,
        direccion: direccion3,
        celular: celular3,
      },
    };
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.put(`${url}/${id}`, body, { headers });
  }

  public updateRequestsByIdRefCom(
    id: string,
    nombre1: string,
    empresa1: string,
    direccion1: string,
    celular1: number,
    nombre2: string,
    empresa2: string,
    direccion2: string,
    celular2: number,
    nombre3: string,
    empresa3: string,
    direccion3: string,
    celular3: number
  ) {
    const url = `${this.baseUrl}/request`;
    const body = {
      regReferenciasComOk: true,
      refComercial1: {
        nombre: nombre1,
        empresa: empresa1,
        direccion: direccion1,
        celular: celular1,
      },
      refComercial2: {
        nombre: nombre2,
        empresa: empresa2,
        direccion: direccion2,
        celular: celular2,
      },
      refComercial3: {
        nombre: nombre3,
        empresa: empresa3,
        direccion: direccion3,
        celular: celular3,
      },
    };
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.put(`${url}/${id}`, body, { headers });
  }

  public updateRequestsByIdResultadoCalificacion(
    id: string,
    resultado: string,
    calificacion: number
  ) {
    const url = `${this.baseUrl}/request`;
    const body = {
      resultado,
      calificacion,
    };
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.put(`${url}/${id}`, body, { headers });
  }

  public updateRequestsByIdFechaConsignacion(
    id: string,
    fechaConsignacion: Date,
    fechasFacturacion: object[]
  ): Observable<Requestx> {
    const url = `${this.baseUrl}/request`;
    const body = {
      fechaConsignacion,
      fechasFacturacion
    };
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.put<Requestx>(`${url}/${id}`, body, { headers });
  }




  public updateRequestsByIdTarjetav(id: string, docTarjetav: File) {
    const url = `${this.baseUrl}/request/tarjetav`;
    const fd = new FormData();
    fd.append('tarjetav', docTarjetav);
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.put(`${url}/${id}`, fd, { headers });
  }
  public updateRequestsByIdMatricula(id: string, docMatricula: File) {
    const url = `${this.baseUrl}/request/matricula`;
    const fd = new FormData();
    fd.append('matricula', docMatricula);
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.put(`${url}/${id}`, fd, { headers });
  }
  public updateRequestsByIdExtracto(id: string, docExtracto: File) {
    const url = `${this.baseUrl}/request/extracto`;
    const fd = new FormData();
    fd.append('extracto', docExtracto);
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.put(`${url}/${id}`, fd, { headers });
  }
  public updateRequestsByIdCamaraCom(id: string, docCamaraCom: File) {
    const url = `${this.baseUrl}/request/CamaraCom`;
    const fd = new FormData();
    fd.append('CamaraCom', docCamaraCom);
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.put(`${url}/${id}`, fd, { headers });
  }
  public updateRequestsByIdRut(id: string, docRut: File) {
    const url = `${this.baseUrl}/request/Rut`;
    const fd = new FormData();
    fd.append('Rut', docRut);
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.put(`${url}/${id}`, fd, { headers });
  }
  public updateRequestsByIdEstudioObra(id: string, docEstudioObra: File) {
    const url = `${this.baseUrl}/request/EstudioObra`;
    const fd = new FormData();
    fd.append('EstudioObra', docEstudioObra);
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.put(`${url}/${id}`, fd, { headers });
  }
  public updateRequestsByIdProgramaObra(id: string, docProgramaObra: File) {
    const url = `${this.baseUrl}/request/ProgramaObra`;
    const fd = new FormData();
    fd.append('ProgramaObra', docProgramaObra);
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.put(`${url}/${id}`, fd, { headers });
  }
  public updateRequestsByIdCuraduria(id: string, docCuraduria: File) {
    const url = `${this.baseUrl}/request/Curaduria`;
    const fd = new FormData();
    fd.append('Curaduria', docCuraduria);
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.put(`${url}/${id}`, fd, { headers });
  }
  public updateRequestsByIdLicenciaConst(id: string, docLicenciaConst: File) {
    const url = `${this.baseUrl}/request/LicenciaConst`;
    const fd = new FormData();
    fd.append('LicenciaConst', docLicenciaConst);
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.put(`${url}/${id}`, fd, { headers });
  }

  public deleteRequestById(id: any) {
    const url = `${this.baseUrl}/request/${id}`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.delete(url, { headers });
  }

  public createPdf(usuario: any, solicitud: any, ip: any) {
    if (ip === ''){
      ip = '0.0.0.0';
    }
    var date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    const hh = date.getHours();
    const min = date.getMinutes();
    const fecha = (dd + '/' + mm + '/' + yyyy + ' Hora: ' + hh + ':' + min);
    const url = `${this.baseUrl}/pdf`;
    console.log('ip', ip);
    // console.log('usuario', usuario, 'solicitud', solicitud);
    const body = {
      userId: usuario._id,
      name: usuario.name,
      surname: usuario.surname,
      numdoc: usuario.personal.numdoc,
      ip: ip,
      dataandtime: fecha,
      codVerificacion: '658547',
      value: solicitud.value,
      email: usuario.email
    };
    return this.http.put(url, body);
  }

  public getIPAddress(): any {
    var ip : any = {ip: ''};
    this.http.get('https://api.ipify.org/?format=json%27').subscribe((rta) => {
      ip = rta;
      console.log('La Ip es: ', ip.ip);
    });
    return ip.ip;
  }

}