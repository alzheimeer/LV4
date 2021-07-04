export interface Bill {
  _id: string;
  idUser: string;
  idRequest: string;
  Producto: string;
  fechaLimitePago: Date;
  name: string;
  surname: string;
  tipodoc: string;
  numdoc: string;
  ciudad: string;
  direccion: string;
  telefono: number;
  totalCuotas: number;
  cuotaActual: number;
  cuotasPendientes: number;
  cuotasEnMora: number;
  diasMora: number;
  interesMora: number;
  saldoVencido: number;
  administracion: number;
  iva: number;
  valorCuotaBase: number;
  valorCuotaTotal: number;
  totalaPagar: number;
  fechaDePago: null;
  valorPagado: number;
  comprobantePath: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export class BillIni implements Bill {
  _id!: string;
  idUser!: string;
  idRequest!: string;
  Producto!: string;
  fechaLimitePago!: Date;
  name!: string;
  surname!: string;
  tipodoc!: string;
  numdoc!: string;
  ciudad!: string;
  direccion!: string;
  telefono!: number;
  totalCuotas!: number;
  cuotaActual!: number;
  cuotasPendientes!: number;
  cuotasEnMora!: number;
  diasMora!: number;
  interesMora!: number;
  saldoVencido!: number;
  administracion!: number;
  iva!: number;
  valorCuotaBase!: number;
  valorCuotaTotal!: number;
  totalaPagar!: number;
  fechaDePago!: null;
  valorPagado!: number;
  comprobantePath!: string;
  createdAt!: Date;
  updatedAt!: Date;
  __v!: number;


}

