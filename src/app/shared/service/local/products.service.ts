import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

   private editable;
  constructor() { }

  editProduct(prod){
    this.editable = prod;
  }
  getProduct(){
    return this.editable;
  }

}
