

export interface Uxuario {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        surname: string;
        email: string;
        tipodoc: string;
        numdoc: number;
        pais: string;
        departamento: string;
        ciudad: string;
        barrio: string;
        direccion: string;
        celular1: number;
        celular2: number;
        banco: string;
        tipocuenta: string;
        numcuenta: number;
        roles: [];
        solicitud: string;
    }
