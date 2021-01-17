import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }
    getProducts() {
      return this.http.get('http://localhost:3000/products');
    }
    getProduct(id){
      return this.http.get('http://localhost:3000/products' + id);
    }
    addNewProduct(prod){
      return this.http.post('http://localhost:3000/products', prod);
    }
}
