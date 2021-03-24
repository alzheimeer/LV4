import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
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

  public createProduct( producto: Product) {
    const url = `${this.baseUrl}/products`;
    return this.http.post<Product>(url, producto);
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
    return this.http.put(`${ url }/${ producto._id }`, producto);
  }

  public deleteProductById( id: any ){
    const url = `${this.baseUrl}/products/${id}`;
    return this.http.delete(url);
  }

}
