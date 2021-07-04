import { Pipe, PipeTransform } from '@angular/core';

import { User } from '../../models/user.models';


@Pipe({
  name: 'filterforamount2'
})
export class FilterforamountPipe2 implements PipeTransform {

  transform(usuarios: User[], page: number = 0, search: string = '', tiposearch: string = 'name'): User[] {
    // console.log(page, search, tiposearch)
    if (search.length === 0) {
      return usuarios.slice(page, page + 10);
    }
    let filterUsuarios: User[] = [];

    if (tiposearch === 'name') {
      filterUsuarios = usuarios.filter(user => user.name.includes(search));
    } else if (tiposearch === 'secondname') {
      filterUsuarios = usuarios.filter(user => user.secondname.includes(search));
    } else if (tiposearch === 'surname') {
      filterUsuarios = usuarios.filter(user => user.surname.includes(search));
    } else if (tiposearch === 'secondsurname') {
      filterUsuarios = usuarios.filter(user => user.secondsurname.includes(search));
    } else if (tiposearch === 'pais') {
      filterUsuarios = usuarios.filter(user => user.personal.pais.includes(search));
    } else if (tiposearch === 'tipodoc') {
      filterUsuarios = usuarios.filter(user => user.personal.tipodoc.includes(search));
    } else if (tiposearch === 'numdoc') {
      filterUsuarios = usuarios.filter(user => user.personal.numdoc.includes(search));
    } else if (tiposearch === 'email') {
      filterUsuarios = usuarios.filter(user => user.email.includes(search));
    } else if (tiposearch === 'departamento') {
      filterUsuarios = usuarios.filter(user => user.personal.departamento.includes(search));
    } else if (tiposearch === 'ciudad') {
      filterUsuarios = usuarios.filter(user => user.personal.ciudad.includes(search));
    } else if (tiposearch === 'id') {
      filterUsuarios = usuarios.filter(user => user._id.includes(search));
    }else if (tiposearch === 'solicitud') {
      filterUsuarios = usuarios.filter(user => user.solicitud.includes(search));
    }
    return filterUsuarios.slice(page, page + 10);
  }

}
