import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  date = new Date();
  totalProducts;
  // filteredProducts;
  // filterText;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.fetchProduct().subscribe((prod) => {
      this.totalProducts = prod.length;
    });
  }
}
