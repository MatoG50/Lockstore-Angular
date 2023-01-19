import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/products';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  isLoading: boolean = true;
  searchKey: string = '';
  products: Product[] = [];

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    // this.products = this.productService.products;
    this.auth.fetchProduct().subscribe((prod) => {
      this.products = prod;
      console.log(this.products);
      this.isLoading = false;
    });

    this.auth.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }
}
