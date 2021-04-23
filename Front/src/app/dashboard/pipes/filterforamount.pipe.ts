import { Pipe, PipeTransform } from '@angular/core';

import { Requestx } from '../../models/request.models';



@Pipe({
  name: 'filterforamount'
})
export class FilterforamountPipe implements PipeTransform {




  transform(solicitudes: Requestx[], page: number = 0, search: string = ''): Requestx[] {
    if (search.length === 0) { return solicitudes.slice(page, page + 5); }
    const filterSolicitudes = solicitudes.filter(soli => soli.idProduct.includes(search));
    return filterSolicitudes.slice(page, page + 5);
  }

}
