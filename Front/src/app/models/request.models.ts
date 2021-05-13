export interface Requestx {
  _id: string;
  numdoc: string;
  tarjetavPath: string;
  matriculaPath: string;
  extractoPath: string;
  CamaraComPath: string;
  RutPath: string;
  EstudioObraPath: string;
  ProgramaObraPath: string;
  CuraduriaPath: string;
  LicenciaConstPath: string;
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
  regCamaraCom: boolean;
  regCamaraComOk: boolean;
  regRut: boolean;
  regRutOk: boolean;
  regEstudioObra: boolean;
  regEstudioObraOk: boolean;
  regProgramaObra: boolean;
  regProgramaObraOk: boolean;
  regCuraduria: boolean;
  regCuraduriaOk: boolean;
  regLicenciaConst: boolean;
  regLicenciaConstOk: boolean;
  regOk: boolean;
  idUser: string;
  idProduct: string;
  value: number;
  time: number;
  description: string;
  resultado: string;
  calificacion: number;
  fechaConsignacion: Date;
  valorDeConsignacion: number;
  valorCuotaBase: number;
  valorCuotaTotal: number;
  fechasFacturacion: [{
    estado: string,
    fecha: Date,
    cuota: number,
    diasMora: number,
    idRecibo: string,
    valor: number
  }];

  estate: string;
  createdAt: Date;
  updatedAt: Date;
  nombreProducto: string;
  tasaEfectivaMes: number;
  tasaEfectivaAnual: number;
  tasaEfectivaAnualMax: number;
  tasaMoraEA: number;
  interesMora: number;
  diasMora: number;
  saldoVencido: number;
  rcomisionAdminHipo: number;
  rregistroHipoteca: number;
  rinteresesAnticipados: number;
  rparqueadero: number;
  rperitaje: number;
  rregistroSimit: number;
  rgmf: number;
  valorConsignar: number;
  administracion: number;
  iva: number;
  soloInteres: number;
  aval: number;
  totalCredito: number;
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
  nombreProducto: string;
  tasaEfectivaMes: number;
  tasaEfectivaAnual: number;
  tasaEfectivaAnualMax: number;
  tasaMoraEA: number;
  interesMora: number;
  diasMora: number;
  saldoVencido: number;
  rcomisionAdminHipo: number;
  rregistroHipoteca: number;
  rinteresesAnticipados: number;
  rparqueadero: number;
  rperitaje: number;
  rregistroSimit: number;
  rgmf: number;
  valorConsignar: number;
  valorCuotaBase: number;
  administracion: number;
  iva: number;
  soloInteres: number;
  aval: number;
  totalCredito: number;
  valorCuotaTotal: number;
}

export class CreateIniReq implements CreateRequest {
  idUser: any;
  idProduct: string;
  value: number;
  time: number;
  description: string;
  estate: string;
  _id: string;
  nombreProducto: string;
  tasaEfectivaMes: number;
  tasaEfectivaAnual: number;
  tasaEfectivaAnualMax: number;
  tasaMoraEA: number;
  interesMora: number;
  diasMora: number;
  saldoVencido: number;
  rcomisionAdminHipo: number;
  rregistroHipoteca: number;
  rinteresesAnticipados: number;
  rparqueadero: number;
  rperitaje: number;
  rregistroSimit: number;
  rgmf: number;
  valorConsignar: number;
  valorCuotaBase: number;
  administracion: number;
  iva: number;
  soloInteres: number;
  aval: number;
  totalCredito: number;
  valorCuotaTotal: number;

  constructor() {
    this.idUser = '',
      this.idProduct = '',
      this.value = 0,
      this.time = 0,
      this.description = '',
      this.estate = '',
      this._id = '',
      this.nombreProducto = '',
      this.tasaEfectivaMes = 0,
      this.tasaEfectivaAnual = 0,
      this.tasaEfectivaAnualMax = 0,
      this.tasaMoraEA = 0,
      this.interesMora = 0,
      this.diasMora = 0,
      this.saldoVencido = 0,
      this.rcomisionAdminHipo = 0,
      this.rregistroHipoteca = 0,
      this.rinteresesAnticipados = 0,
      this.rparqueadero = 0,
      this.rperitaje = 0,
      this.rregistroSimit = 0,
      this.rgmf = 0,
      this.valorConsignar = 0,
      this.administracion = 0,
      this.iva = 0,
      this.soloInteres = 0,
      this.aval = 0,
      this.totalCredito = 0,
      this.valorCuotaTotal = 0,
      this.valorCuotaBase = 0
  }
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
  CamaraComPath: string;
  RutPath: string;
  EstudioObraPath: string;
  ProgramaObraPath: string;
  CuraduriaPath: string;
  LicenciaConstPath: string;
  idUser: string;
  idProduct: string;
  value: number;
  time: number;
  description: string;
  resultado: string;
  calificacion: number;
  fechaConsignacion: Date;
  valorDeConsignacion: number;
  valorCuotaBase: number;
  valorCuotaTotal: number;
  fechasFacturacion: [{
    estado: string,
    fecha: Date,
    cuota: number,
    diasMora: number,
    idRecibo: string,
    valor: number
  }];

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
  regCamaraCom: boolean;
  regCamaraComOk: boolean;
  regRut: boolean;
  regRutOk: boolean;
  regEstudioObra: boolean;
  regEstudioObraOk: boolean;
  regProgramaObra: boolean;
  regProgramaObraOk: boolean;
  regCuraduria: boolean;
  regCuraduriaOk: boolean;
  regLicenciaConst: boolean;
  regLicenciaConstOk: boolean;
  regOk: boolean;
  nombreProducto: string;
  tasaEfectivaMes: number;
  tasaEfectivaAnual: number;
  tasaEfectivaAnualMax: number;
  tasaMoraEA: number;
  interesMora: number;
  diasMora: number;
  saldoVencido: number;
  rcomisionAdminHipo: number;
  rregistroHipoteca: number;
  rinteresesAnticipados: number;
  rparqueadero: number;
  rperitaje: number;
  rregistroSimit: number;
  rgmf: number;
  valorConsignar: number;
  administracion: number;
  iva: number;
  soloInteres: number;
  aval: number;
  totalCredito: number;

  constructor() {
    this._id = '',
      this.estate = '',
      this.extractoPath = '',
      this.CamaraComPath = '',
      this.RutPath = '',
      this.EstudioObraPath = '',
      this.ProgramaObraPath = '',
      this.CuraduriaPath = '',
      this.LicenciaConstPath = '',
      this.idProduct = '',
      this.idUser = '',
      this.matriculaPath = '',
      this.numdoc = '',
      this.__v = 0,
      this.regCedula = false,
      this.regCedulaOk = false,
      this.regExtracto = false,
      this.regExtractoOk = false,
      this.regCamaraCom = false,
      this.regCamaraComOk = false,
      this.regRut = false,
      this.regRutOk = false,
      this.regEstudioObra = false,
      this.regEstudioObraOk = false,
      this.regProgramaObra = false,
      this.regProgramaObraOk = false,
      this.regCuraduria = false,
      this.regCuraduriaOk = false,
      this.regLicenciaConst = false,
      this.regLicenciaConstOk = false,
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
      this.valorDeConsignacion = 0,
      this.fechasFacturacion = [{
        estado: '',
        fecha: new Date(),
        cuota: 0,
        diasMora: 0,
        idRecibo: '',
        valor: 0,
      }],

      this.createdAt = new Date(),

      this.nombreProducto = '',
      this.tasaEfectivaMes = 0,
      this.tasaEfectivaAnual = 0,
      this.tasaEfectivaAnualMax = 0,
      this.tasaMoraEA = 0,
      this.interesMora = 0,
      this.diasMora = 0,
      this.saldoVencido = 0,
      this.rcomisionAdminHipo = 0,
      this.rregistroHipoteca = 0,
      this.rinteresesAnticipados = 0,
      this.rparqueadero = 0,
      this.rperitaje = 0,
      this.rregistroSimit = 0,
      this.rgmf = 0,
      this.valorConsignar = 0,
      this.administracion = 0,
      this.iva = 0,
      this.soloInteres = 0,
      this.aval = 0,
      this.totalCredito = 0,
      this.valorCuotaTotal = 0,
      this.valorCuotaBase = 0,

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

export class RequestMao implements Requestx {
  _id: string;
  numdoc: string;
  tarjetavPath: string;
  matriculaPath: string;
  extractoPath: string;
  CamaraComPath: string;
  RutPath: string;
  EstudioObraPath: string;
  ProgramaObraPath: string;
  CuraduriaPath: string;
  LicenciaConstPath: string;
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
  regCamaraCom: boolean;
  regCamaraComOk: boolean;
  regRut: boolean;
  regRutOk: boolean;
  regEstudioObra: boolean;
  regEstudioObraOk: boolean;
  regProgramaObra: boolean;
  regProgramaObraOk: boolean;
  regCuraduria: boolean;
  regCuraduriaOk: boolean;
  regLicenciaConst: boolean;
  regLicenciaConstOk: boolean;
  regOk: boolean;
  idUser: string;
  idProduct: string;
  value: number;
  time: number;
  description: string;
  resultado: string;
  calificacion: number;
  fechaConsignacion: Date;
  valorDeConsignacion: number;
  valorCuotaBase: number;
  valorCuotaTotal: number;
  fechasFacturacion: [{ estado: string; fecha: Date; cuota: number; diasMora: number; idRecibo: string; valor: number; }];
  estate: string;
  createdAt: Date;
  updatedAt: Date;
  nombreProducto: string;
  tasaEfectivaMes: number;
  tasaEfectivaAnual: number;
  tasaEfectivaAnualMax: number;
  tasaMoraEA: number;
  interesMora: number;
  diasMora: number;
  saldoVencido: number;
  rcomisionAdminHipo: number;
  rregistroHipoteca: number;
  rinteresesAnticipados: number;
  rparqueadero: number;
  rperitaje: number;
  rregistroSimit: number;
  rgmf: number;
  valorConsignar: number;
  administracion: number;
  iva: number;
  soloInteres: number;
  aval: number;
  totalCredito: number;
  constructor() {
    this._id = '',
      this.estate = '',
      this.extractoPath = '',
      this.CamaraComPath = '',
      this.RutPath = '',
      this.EstudioObraPath = '',
      this.ProgramaObraPath = '',
      this.CuraduriaPath = '',
      this.LicenciaConstPath = '',
      this.idProduct = '',
      this.idUser = '',
      this.matriculaPath = '',
      this.numdoc = '',
      this.__v = 0,
      this.regCedula = false,
      this.regCedulaOk = false,
      this.regExtracto = false,
      this.regExtractoOk = false,
      this.regCamaraCom = false,
      this.regCamaraComOk = false,
      this.regRut = false,
      this.regRutOk = false,
      this.regEstudioObra = false,
      this.regEstudioObraOk = false,
      this.regProgramaObra = false,
      this.regProgramaObraOk = false,
      this.regCuraduria = false,
      this.regCuraduriaOk = false,
      this.regLicenciaConst = false,
      this.regLicenciaConstOk = false,
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
      this.regCamaraCom = false,
      this.regCamaraComOk = false,
      this.regRut = false,
      this.regRutOk = false,
      this.regEstudioObra = false,
      this.regEstudioObraOk = false,
      this.regProgramaObra = false,
      this.regProgramaObraOk = false,
      this.regCuraduria = false,
      this.regCuraduriaOk = false,
      this.regLicenciaConst = false,
      this.regLicenciaConstOk = false,
      this.tarjetavPath = '',
      this.time = 0,
      this.value = 0,
      this.description = '',
      this.resultado = '',
      this.calificacion = 0,
      this.updatedAt = new Date(),
      this.fechaConsignacion = new Date(),
      this.valorDeConsignacion = 0,
      this.fechasFacturacion = [{
        estado: '',
        fecha: new Date(),
        cuota: 0,
        diasMora: 0,
        idRecibo: '',
        valor: 0,
      }],

      this.createdAt = new Date(),

      this.nombreProducto = '',
      this.tasaEfectivaMes = 0,
      this.tasaEfectivaAnual = 0,
      this.tasaEfectivaAnualMax = 0,
      this.tasaMoraEA = 0,
      this.interesMora = 0,
      this.diasMora = 0,
      this.saldoVencido = 0,
      this.rcomisionAdminHipo = 0,
      this.rregistroHipoteca = 0,
      this.rinteresesAnticipados = 0,
      this.rparqueadero = 0,
      this.rperitaje = 0,
      this.rregistroSimit = 0,
      this.rgmf = 0,
      this.valorConsignar = 0,
      this.administracion = 0,
      this.iva = 0,
      this.soloInteres = 0,
      this.aval = 0,
      this.totalCredito = 0,
      this.valorCuotaTotal = 0,
      this.valorCuotaBase = 0,

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
