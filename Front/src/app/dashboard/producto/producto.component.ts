import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../models/product.models';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  public productos: Product[] = [];
  hayerror = false;
  element = false;

  constructor(private router: Router, private productService: ProductService, ) { }

   ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(resp => {
      this.productos = resp;
      // console.log(this.productos[0].);
    }, (err) => {
      this.hayerror = true;
      console.log( 'Error' );
    });
  }





  save(producto: any, valorinput: any, campo: string) {
    const productoTemp = producto.campo;
    if (campo === 'name') {
      producto.name = valorinput;
    }
    if (campo === 'valuemin') {
      producto.valuemin = valorinput;
    }
    if (campo === 'valuemax') {
      producto.valuemax = valorinput;
    }
    if (campo === 'iEfectivoAnual') {
      producto.iEfectivoAnual = valorinput;
    }
    if (campo === 'iEfectivoAnualMax') {
      producto.iEfectivoAnualMax = valorinput;
    }
    if (campo === 'iMoraEfectivoAnual') {
      producto.iMoraEfectivoAnual = valorinput;
    }
    if (campo === 'termmin') {
      producto.termmin = valorinput;
    }
    if (campo === 'termmax') {
      producto.termmax = valorinput;
    }
    if (campo === 'administracion') {
      producto.administracion = valorinput;
    }
    if (campo === 'iva') {
      producto.iva = valorinput;
    }
    if (campo === 'aval') {
      producto.aval = valorinput;
    }
    if (campo === 'comisionAdminHipo') {
      producto.comisionAdminHipo = valorinput;
    }
    if (campo === 'excedenteComisionAdminHipo') {
      producto.excedenteComisionAdminHipo = valorinput;
    }
    if (campo === 'registroHipoteca') {
      producto.registroHipoteca = valorinput;
    }
    if (campo === 'interesesAnticipados') {
      producto.interesesAnticipados = valorinput;
    }
    if (campo === 'parqueadero') {
      producto.parqueadero = valorinput;
    }
    if (campo === 'peritaje') {
      producto.peritaje = valorinput;
    }
    if (campo === 'registroSimit') {
      producto.registroSimit = valorinput;
    }
    if (campo === 'gmfCuatroxMil') {
      producto.gmfCuatroxMil = valorinput;
    }
    this.productService.updateProductsById(producto).subscribe(
      (res) => {
        console.log('OK');
        producto.campo = res;
      }, (err) => {
        console.log(err);
        producto.campo = productoTemp;
      }
    );
  }




}
