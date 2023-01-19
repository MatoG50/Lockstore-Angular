import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public searchTerm: string = '';
  allProducts: number;

  date = new Date();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.fetchProduct().subscribe((prod) => {
      this.allProducts = prod.length;
    });
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.authService.search.next(this.searchTerm);
  }
}
