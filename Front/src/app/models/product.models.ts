export interface Product {
  regInmueble:    boolean;
  regPersonales:  boolean;
  regVehiculo:    boolean;
  regTrabajo:     boolean;
  regReferencias: boolean;
  regReferenciasCom: boolean;
  regCedula: boolean;
  regPasaporte: boolean;
  regTarjetav: boolean;
  regMatricula: boolean;
  regExtracto: boolean;
  _id:            string;
  name:           string;
  valuemin:       number;
  valuemax:       number;
  imin:           number;
  imax:           number;
  termmin:        number;
  termmax:        number;
  imageUrl:       string;
  createdAt:      Date;
  updatedAt:      Date;
  __v:            number;
}


