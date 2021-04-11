export interface Requestx {
  _id: string;
  inmueble: Inmueble;
  vehiculo: Vehiculo;
  trabajoEmpleado: TrabajoEmpleado;
  trabajoIndependiente: TrabajoIndependiente;
  trabajoEmpresa: TrabajoEmpresa;
  referencias: Referencias;
  regInmueble: boolean;
  regPersonales: boolean;
  regVehiculo: boolean;
  regTrabajo: boolean;
  regReferencias: boolean;
  regReferenciasCom: boolean;
  idUser: string;
  idProduct: string;
  value: number;
  time: number;
  description: string;
  estate: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
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

export interface Referencias {
  refFamiliar: { [key: string]: Ref1 };
  refComercial: { [key: string]: Ref2 };
}

export interface Ref1 {
  nombre: string;
  direccion: string;
  celular: number;
  parentezco: string;
}
export interface Ref2 {
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

