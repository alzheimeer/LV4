import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchnameproduct'
})
export class SearchnameproductPipe implements PipeTransform {

  transform(listaProducto: any[], texto: string): any {
    if(!texto) return listaProducto
    return listaProducto.filter(producto => producto._id.includes(texto))
  }
}
