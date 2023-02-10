import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/products';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductDetailsComponent } from '../../product-details/product-details.component';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  isLoading: boolean = true;
  searchKey: string = '';
  products: Product[] = [];

  constructor(
    private auth: AuthService,
    private dialog: MatDialog,
    public router: Router
  ) {}

  ngOnInit(): void {
    // this.products = this.productService.products;
    this.auth.fetchProduct().subscribe((prod) => {
      this.products = prod;
      this.isLoading = false;
    });

    this.auth.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  openDialog(id: string) {
    this.dialog.open(ProductDetailsComponent, {
      data: {
        id,
      },
      width: '500px',
    });
  }
}
