import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/service/local/products.service';


@Component({
  selector: 'app-gestion-page',
  templateUrl: './gestion-page.component.html',
  styleUrls: ['./gestion-page.component.scss']
})
export class GestionPageComponent implements OnInit {
  
  editable;
  nombre;
  precio;
  descripcion;
  imagen;
  rating;
  constructor(private productsLocalService: ProductsService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.editable = [];
      this.editable.push(this.productsLocalService.getProduct())
    
    });
    
  }

}
