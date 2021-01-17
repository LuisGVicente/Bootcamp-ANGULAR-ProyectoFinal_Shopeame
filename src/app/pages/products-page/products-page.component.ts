import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/shared/backend.service';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  products;
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getProducts().subscribe((res: any) => this.products = res );

    }

}
