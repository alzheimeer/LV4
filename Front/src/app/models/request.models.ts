export interface Requestx {
  _id: string;
  numdoc: string;
  tarjetavPath: string;
  matriculaPath: string;
  extractoPath: string;
  inmueble: Inmueble;
  vehiculo: Vehiculo;
  trabajoEmpleado: TrabajoEmpleado;
  trabajoIndependiente: TrabajoIndependiente;
  trabajoEmpresa: TrabajoEmpresa;
  __v: number;
  refFamiliar1: RefFamiliar1;
  refFamiliar2: RefFamiliar2;
  refFamiliar3: RefFamiliar3;
  refComercial1: RefComercial1;
  refComercial2: RefComercial2;
  refComercial3: RefComercial3;
  regInmueble: boolean;
  regInmuebleOk: boolean;
  regPersonales: boolean;
  regPersonalesOk: boolean;
  regVehiculo: boolean;
  regVehiculoOk: boolean;
  regTrabajo: boolean;
  regTrabajoOk: boolean;
  regReferencias: boolean;
  regReferenciasOk: boolean;
  regReferenciasCom: boolean;
  regReferenciasComOk: boolean;
  regCedula: boolean;
  regCedulaOk: boolean;
  regPasaporte: boolean;
  regPasaporteOk: boolean;
  regTarjetav: boolean;
  regTarjetavOk: boolean;
  regMatricula: boolean;
  regMatriculaOk: boolean;
  regExtracto: boolean;
  regExtractoOk: boolean;
  regOk: boolean;
  idUser: string;
  idProduct: string;
  value: number;
  time: number;
  description: string;
  resultado: string;
  calificacion: number;
  fechaConsignacion: Date;
  estate: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Inmueble {
  tipo: string;
  matricula: string;
  uso: string;
  estrato: number;
  departamento: string;
  ciudad: string;
  barrio: string;
  direccion: string;
  antiguedad: number;
  area: number;
  valorComercial: number;
}

export interface RefFamiliar1 {
  nombre: string;
  direccion: string;
  celular: number;
  parentezco: string;
}
export interface RefFamiliar2 {
  nombre: string;
  direccion: string;
  celular: number;
  parentezco: string;
}
export interface RefFamiliar3 {
  nombre: string;
  direccion: string;
  celular: number;
  parentezco: string;
}
export interface RefComercial1 {
  nombre: string;
  direccion: string;
  celular: number;
  empresa: string;
}
export interface RefComercial2 {
  nombre: string;
  direccion: string;
  celular: number;
  empresa: string;
}
export interface RefComercial3 {
  nombre: string;
  direccion: string;
  celular: number;
  empresa: string;
}

export interface TrabajoEmpleado {
  tiempoTrabajando: number;
  ingresoMensual: number;
  direccion: string;
  telefono: number;
  jefeInmediato: string;
  cargoActual: string;
}

export interface TrabajoEmpresa {
  nombre: string;
  nit: string;
  ingresoMensual: number;
  direccion: string;
  telefono: number;
  actividadComercial: string;
}

export interface TrabajoIndependiente {
  tiempoTrabajando: number;
  ingresoMensual: number;
  direccion: string;
  telefono: number;
  actividadComercial: string;
}

export interface Vehiculo {
  tipo: string;
  placa: string;
  modelo: number;
  tipoCaja: string;
  linea: string;
  marca: string;
  kilometraje: number;
  tipoPlaca: string;
  unicoDueno: string;
}


export interface CreateRequest {
  idUser: any;
  idProduct: string;
  value: number;
  time: number;
  description: string;
  estate: string;
  _id: string;
}



export class RequestIni implements Requestx {
  inmueble: Inmueble;
  vehiculo: Vehiculo;
  trabajoEmpleado: TrabajoEmpleado;
  trabajoIndependiente: TrabajoIndependiente;
  trabajoEmpresa: TrabajoEmpresa;
  refFamiliar1: RefFamiliar1;
  refFamiliar2: RefFamiliar2;
  refFamiliar3: RefFamiliar3;
  refComercial1: RefComercial1;
  refComercial2: RefComercial2;
  refComercial3: RefComercial3;
  _id: string;
  __v: number;
  numdoc: string;
  tarjetavPath: string;
  matriculaPath: string;
  extractoPath: string;
  idUser: string;
  idProduct: string;
  value: number;
  time: number;
  description: string;
  resultado: string;
  calificacion: number;
  fechaConsignacion: Date;
  estate: string;
  createdAt: Date;
  updatedAt: Date;
  regInmueble: boolean;
  regInmuebleOk: boolean;
  regPersonales: boolean;
  regPersonalesOk: boolean;
  regVehiculo: boolean;
  regVehiculoOk: boolean;
  regTrabajo: boolean;
  regTrabajoOk: boolean;
  regReferencias: boolean;
  regReferenciasOk: boolean;
  regReferenciasCom: boolean;
  regReferenciasComOk: boolean;
  regCedula: boolean;
  regCedulaOk: boolean;
  regPasaporte: boolean;
  regPasaporteOk: boolean;
  regTarjetav: boolean;
  regTarjetavOk: boolean;
  regMatricula: boolean;
  regMatriculaOk: boolean;
  regExtracto: boolean;
  regExtractoOk: boolean;
  regOk: boolean;


  constructor() {
    this._id = '',
      this.estate = '',
      this.extractoPath = '',
      this.idProduct = '',
      this.idUser = '',
      this.matriculaPath = '',
      this.numdoc = '',
      this.__v = 0,
      this.regCedula = false,
      this.regCedulaOk = false,
      this.regExtracto = false,
      this.regExtractoOk = false,
      this.regInmueble = false,
      this.regInmuebleOk = false,
      this.regMatricula = false,
      this.regMatriculaOk = false,
      this.regOk = false,
      this.regPasaporte = false,
      this.regPasaporteOk = false,
      this.regPersonales = false,
      this.regPersonalesOk = false,
      this.regReferencias = false,
      this.regReferenciasOk = false,
      this.regReferenciasCom = false,
      this.regReferenciasComOk = false,
      this.regTarjetav = false,
      this.regTarjetavOk = false,
      this.regTrabajo = false,
      this.regTrabajoOk = false,
      this.regVehiculo = false,
      this.regVehiculoOk = false,
      this.tarjetavPath = '',
      this.time = 0,
      this.value = 0,
      this.description = '',
      this.resultado = '',
      this.calificacion = 0,
      this.updatedAt = new Date(),
      this.fechaConsignacion = new Date(),
      this.createdAt = new Date(),

      this.vehiculo = {
        tipo: '',
        placa: '',
        modelo: 0,
        tipoCaja: '',
        linea: '',
        marca: '',
        kilometraje: 0,
        tipoPlaca: '',
        unicoDueno: '',
      },
      this.inmueble = {
        tipo: '',
        matricula: '',
        uso: '',
        estrato: 0,
        departamento: '',
        ciudad: '',
        barrio: '',
        direccion: '',
        antiguedad: 0,
        area: 0,
        valorComercial: 0,
      },

      this.trabajoIndependiente = {
        tiempoTrabajando: 0,
        ingresoMensual: 0,
        direccion: '',
        telefono: 0,
        actividadComercial: '',
      },

      this.trabajoEmpleado = {
        tiempoTrabajando: 0,
        ingresoMensual: 0,
        direccion: '',
        telefono: 0,
        jefeInmediato: '',
        cargoActual: '',
      },
      this.trabajoEmpresa = {
        nombre: '',
        nit: '',
        ingresoMensual: 0,
        direccion: '',
        telefono: 0,
        actividadComercial: '',
      },
      this.refFamiliar1 = {
        nombre: '',
        direccion: '',
        celular: 0,
        parentezco: '',
      },
      this.refFamiliar2 = {
        nombre: '',
        direccion: '',
        celular: 0,
        parentezco: '',
      },
      this.refFamiliar3 = {
        nombre: '',
        direccion: '',
        celular: 0,
        parentezco: '',
      },

      this.refComercial1 = {
        nombre: '',
        direccion: '',
        celular: 0,
        empresa: '',
      },
      this.refComercial2 = {
        nombre: '',
        direccion: '',
        celular: 0,
        empresa: '',
      },
      this.refComercial3 = {
        nombre: '',
        direccion: '',
        celular: 0,
        empresa: '',
      };
  }
}
