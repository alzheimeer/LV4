/* export interface Requestx {
  _id:         string;
  idUser:      string;
  idProduct:   string;
  value:       number;
  time:        number;
  description: string;
  estate:      string;
  createdAt:   Date;
  updatedAt:   Date;
  __v:         number;
} */
export interface Requestx {
  inmueble:             Inmueble;
  vehiculo:             Vehiculo;
  trabajoEmpleado:      TrabajoEmpleado;
  trabajoIndependiente: TrabajoIndependiente;
  trabajoEmpresa:       TrabajoEmpresa;
  referencias:          Referencias;
  regInmueble:          boolean;
  regPersonales:        boolean;
  regVehiculo:          boolean;
  regTrabajo:           boolean;
  regReferencias:       boolean;
  _id:                  string;
  idUser:               string;
  idProduct:            string;
  value:                number;
  time:                 number;
  description:          string;
  estate:               string;
  createdAt:            Date;
  updatedAt:            Date;
  __v:                  number;
}

export interface Inmueble {
  tipo:           string;
  matricula:      string;
  uso:            string;
  estrato:        number;
  departamento:   string;
  ciudad:         string;
  barrio:         string;
  direccion:      string;
  antiguedad:     number;
  area:           number;
  valorComercial: number;
}

export interface Referencias {
  refFamiliar:  { [key: string]: Ref };
  refComercial: { [key: string]: Ref };
}

export interface Ref {
  nombre:      string;
  empresa?:    string;
  direccion:   string;
  celular:     number;
  parentezco?: string;
}

export interface TrabajoEmpleado {
  tiempoTrabajando: number;
  ingresoMensual:   number;
  direccion:        string;
  telefono:         number;
  jefeInmediato:    string;
  cargoActual:      string;
}

export interface TrabajoEmpresa {
  nombre:             string;
  nit:                string;
  ingresoMensual:     number;
  direccion:          string;
  telefono:           number;
  actividadComercial: string;
}

export interface TrabajoIndependiente {
  tiempoTrabajando:   number;
  ingresoMensual:     number;
  direccion:          string;
  telefono:           number;
  actividadComercial: string;
}

export interface Vehiculo {
  tipo:        string;
  placa:       string;
  modelo:      number;
  tipoCaja:    string;
  linea:       string;
  referencia:  string;
  kilometraje: number;
  tipoPlaca:   string;
  unicoDueno:  boolean;
}


export interface CreateRequest {
  idUser:      any;
  idProduct:   string;
  value:       number;
  time:        number;
  description: string;
  estate:      string;
  _id:         string;
}
