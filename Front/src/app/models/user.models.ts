export interface User {
  personal: Personal;
  banca: Banca;
  roles: string[];
  _id: string;
  solicitud: string;
  name: string;
  secondname: string;
  surname: string;
  secondsurname: string;
  email: string;
  typeloan: string;
  avatarPath: string;
  cedulaPath: string;
  pasaportePath: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Banca {
  banco: string;
  tipocuenta?: string;
  numcuenta?: number;
}

export interface Personal {
  tipodoc: string;
  fechaNac: Date;
  fechaExp: Date;
  pais: string;
  departamento: string;
  ciudad: string;
  barrio: string;
  direccion: string;
  numdoc?: number;
  celular1?: number;
  celular2?: number;
}
export class UsuarioIni implements User {
  personal: Personal;
  banca: Banca;
  roles: string[];
  _id: string;
  solicitud: string;
  name: string;
  secondname: string;
  surname: string;
  secondsurname: string;
  email: string;
  typeloan: string;
  avatarPath: string;
  cedulaPath: string;
  pasaportePath: string;
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    this.roles = [],
      this.banca = {
        banco: '',
        tipocuenta: '',
        numcuenta: 0,
      },
      this.personal = {
        tipodoc: '',
        fechaNac: new Date(),
        fechaExp: new Date(),
        pais: '',
        departamento: '',
        ciudad: '',
        barrio: '',
        direccion: '',
        numdoc: 0,
        celular1: 0,
        celular2: 0,
      };
    this._id = '';
    this.solicitud = '',
      this.name = '',
      this.secondname = '',
      this.surname = '',
      this.secondsurname = '',
      this.email = '',
      this.typeloan = '',
      this.avatarPath = '',
      this.cedulaPath = '',
      this.pasaportePath = '',
      this.createdAt = new Date(),
      this.updatedAt = new Date();
  }
}
// export class pepe {
//   constructor(
//           id: string,
//           createdAt: Date,
//           updatedAt: Date,
//           name: string,
//           surname: string,
//           email: string,
//           tipodoc: string,
//           pais: string,
//           departamento: string,
//           ciudad: string,
//           barrio: string,
//           direccion: string,
//           banco: string,
//           tipocuenta: string,
//           numcuenta: number,
//           roles: [],
//           numdoc: number,
//           celular1: number,
//           celular2: number,
//       ) { }
//       static uxuarioDesdeJson(obj: User) {
//          return new pepe(
//         obj['_id'],
//         obj['createdAt'],
//         obj['updatedAt'],
//         obj['name'],
//         obj['surname'],
//         obj['email'],
//         obj['personal']['tipodoc'],
//         obj['personal']['pais'],
//         obj['personal']['departamento'],
//         obj['personal']['ciudad'],
//         obj['personal']['barrio'],
//         obj['personal']['direccion'],
//         obj['banca']['banco'],
//         obj['banca']['tipocuenta'],
//         obj['banca']['numcuenta'],
//         obj['roles'],
//         obj['personal']['numdoc'],
//         obj['personal']['celular1'],
//         obj['personal']['celular2'],
//           );
//       }
// }
