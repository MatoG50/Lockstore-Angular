import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Models/products';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  date = new Date();
  products: Product[] = [];
  allProducts;
  public searchTerm: string = '';

  // filteredProducts;
  // filterText;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.fetchProduct().subscribe((prod) => {
      this.products = prod;
    });
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.authService.search.next(this.searchTerm);
  }
}
