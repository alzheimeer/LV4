export interface Product {
  regInmueble: boolean;
  regPersonales: boolean;
  regVehiculo: boolean;
  regTrabajo: boolean;
  regReferencias: boolean;
  regReferenciasCom: boolean;
  regCedula: boolean;
  regPasaporte: boolean;
  regTarjetav: boolean;
  regMatricula: boolean;
  regExtracto: boolean;
  regCamaraCom: boolean;
  regRut: boolean;
  regEstudioObra: boolean;
  regProgramaObra: boolean;
  regCuraduria: boolean;
  regLicenciaConst: boolean;
  _id: string;
  name: string;
  valuemin: number;
  valuemax: number;
  imin: number;
  imax: number;
  termmin: number;
  termmax: number;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  iEfectivoAnual: number;
  iEfectivoAnualMax: number;
  iMoraEfectivoAnual: number;
  administracion: number;
  iva: number;
  aval: number;
  parqueadero: number;
  peritaje: number;
  registroSimit: number;
  gmfCuatroxMil: number;
  comisionAdminHipo: number;
  excedenteComisionAdminHipo: number;
  registroHipoteca: number;
  step: number;
  interesesAnticipados: number;

}

export class ProductIni implements Product {
  regInmueble: boolean;
  regPersonales: boolean;
  regVehiculo: boolean;
  regTrabajo: boolean;
  regReferencias: boolean;
  regReferenciasCom: boolean;
  regCedula: boolean;
  regPasaporte: boolean;
  regTarjetav: boolean;
  regMatricula: boolean;
  regExtracto: boolean;
  regCamaraCom: boolean;
  regRut: boolean;
  regEstudioObra: boolean;
  regProgramaObra: boolean;
  regCuraduria: boolean;
  regLicenciaConst: boolean;
  _id: string;
  name: string;
  valuemin: number;
  valuemax: number;
  imin: number;
  imax: number;
  termmin: number;
  termmax: number;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  iEfectivoAnual: number;
  iEfectivoAnualMax: number;
  iMoraEfectivoAnual: number;
  administracion: number;
  iva: number;
  aval: number;
  parqueadero: number;
  peritaje: number;
  registroSimit: number;
  gmfCuatroxMil: number;
  comisionAdminHipo: number;
  excedenteComisionAdminHipo: number;
  registroHipoteca: number;
  step: number;
  interesesAnticipados: number;

  constructor() {
    this.regInmueble = false,
      this.regPersonales = false,
      this.regVehiculo = false,
      this.regTrabajo = false,
      this.regReferencias = false,
      this.regReferenciasCom = false,
      this.regCedula = false,
      this.regPasaporte = false,
      this.regTarjetav = false,
      this.regMatricula = false,
      this.regExtracto = false,
      this.regCamaraCom = false,
      this.regRut = false,
      this.regEstudioObra = false,
      this.regProgramaObra = false,
      this.regCuraduria = false,
      this.regLicenciaConst = false,
      this._id = '',
      this.name = '',
      this.valuemin = 0,
      this.valuemax = 0,
      this.imin = 0,
      this.imax = 0,
      this.termmin = 0,
      this.termmax = 0,
      this.imageUrl = '',
      this.createdAt = new Date(),
      this.updatedAt = new Date(),
      this.__v = 0,
      this.iEfectivoAnual = 0,
      this.iEfectivoAnualMax = 0,
      this.iMoraEfectivoAnual = 0,
      this.administracion = 0,
      this.iva = 0,
      this.aval = 0,
      this.parqueadero = 0,
      this.peritaje = 0,
      this.registroSimit = 0,
      this.gmfCuatroxMil = 0,
      this.comisionAdminHipo = 0,
      this.excedenteComisionAdminHipo = 0,
      this.registroHipoteca = 0,
      this.step = 0,
      this.interesesAnticipados = 0
  }

}
