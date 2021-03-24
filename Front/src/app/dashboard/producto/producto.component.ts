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
}
