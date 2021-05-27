import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ProductCreate } from '../../models/product.models';
import { Product } from './../../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = environment.baseUrl;
  private _producto!: Product;

  get producto() {
    return { ...this._producto };
  }

  constructor(private http: HttpClient) { }

  public createProduct(producto: ProductCreate): Observable<Product> {
    const url = `${this.baseUrl}/products`;
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this.http.post<Product>(url, producto, { headers });
  }

  public getProducts(): Observable<Product[]> {
    const url = `${this.baseUrl}/products`;
    return this.http.get<Product[]>(url);
  }

  public getProductById(id: any): Observable<Product> {
    const url = `${this.baseUrl}/products/${id}`;
    return this.http.get<Product>(url);
  }

  public updateProductsById( producto: Product ){
    const url = `${this.baseUrl}/products`;
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this.http.put(`${url}/${producto._id}`, producto, { headers });
  }

  public deleteProductById( id: any ){
    const url = `${this.baseUrl}/products/${id}`;
    return this.http.delete(url);
  }

}
