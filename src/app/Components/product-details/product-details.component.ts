import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private activatedRoute: ActivatedRoute,
    private productSevice: ProductsService,
    private router: Router
  ) {}

  product: {
    id: number;
    name: string;
    price: number;
    inventory: number;
    minimum_stock: number;
    category: string;
  };

  productId;
  routeParamObs;
  editMode: boolean = false;

  ngOnInit(): void {
    // this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    // // this.productId = this.activatedRoute.snapshot.params['id'];
    // this.product = this.productSevice.products.find(
    //   (x) => x.id == this.productId
    // );
    // On click show something same page e.g dialog box
    // this.productSevice.onShowDetails.subscribe(
    //   (data: {
    //     name: string;
    //     price: number;
    //     inventory: number;
    //     minimum_stock: number;
    //     category: string;
    //   }) => {
    //     this.product = data;
    //   }
    // );

    this.routeParamObs = this.activatedRoute.paramMap.subscribe((param) => {
      this.productId = param.get('id');
      this.product = this.productSevice.products.find(
        (x) => x.id == this.productId
      );
    });

    // snapshot ?= query (don't use)
    // this.editMode = Boolean(
    //   this.activatedRoute.snapshot.queryParamMap.get('edit')
    // );

    // Observable

    this.activatedRoute.queryParamMap.subscribe((param) => {
      this.editMode = Boolean(param.get('edit'));
    });
  }

  appendQueryParam() {
    this.router.navigate(['/products/product', this.product.id], {
      queryParams: { edit: true },
    });
  }

  ngOnDestroy() {
    this.routeParamObs.unsubscribe();
  }
  onDelete(id: number) {}
}
