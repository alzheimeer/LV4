import { Pipe, PipeTransform } from '@angular/core';

import { Requestx } from '../../models/request.models';



@Pipe({
  name: 'filterforamount'
})
export class FilterforamountPipe implements PipeTransform {




  transform(solicitudes: Requestx[], page: number = 0, search: string = '', tiposearch: string = 'prod'): Requestx[] {
    // console.log(search, tiposearch)
    if (search.length === 0) { return solicitudes.slice(page, page + 5); }
    let filterSolicitudes: Requestx[] = [];
    if (tiposearch === 'prod') {
      filterSolicitudes = solicitudes.filter(soli => soli.idProduct.includes(search));
    } else {
      filterSolicitudes = solicitudes.filter(soli => soli.numdoc.includes(search));
    }

    return filterSolicitudes.slice(page, page + 5);
  }

}
