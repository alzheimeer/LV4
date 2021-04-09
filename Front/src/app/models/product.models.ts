export interface Product {
  regInmueble:    boolean;
  regPersonales:  boolean;
  regVehiculo:    boolean;
  regTrabajo:     boolean;
  regReferencias: boolean;
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


