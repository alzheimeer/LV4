export interface GetUsers {
  usuario?: Usuario[];
}

export interface Usuario {
  personal?:  Personal;
  banca?:     Banca;
  roles?:     string[];
  _id?:       string;
  name?:      string;
  surname?:   string;
  email?:     string;
  createdAt?: Date;
  updatedAt?: Date;
}
interface Banca {
  banco?:      string;
  tipocuenta?: string;
  numcuenta?:  number;
}
interface Personal {
  tipodoc?:   string;
  departamento?:   string;
  pais?:      string;
  ciudad?:    string;
  barrio?:    string;
  direccion?: string;
  numdoc?:    number;
  celular1?:  number;
  celular2?:  number;
}
