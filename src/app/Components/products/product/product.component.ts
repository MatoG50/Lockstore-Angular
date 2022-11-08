import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: {
    id: number;
    name: string;
    price: number;
    inventory: number;
    minimum_stock: number;
    category: string;
  }[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productService.products;
  }
  showDetails(product: {
    name: string;
    price: number;
    inventory: number;
    minimum_stock: number;
    category: string;
  }) {
    this.productService.showProductDetails(product);
  }
}
