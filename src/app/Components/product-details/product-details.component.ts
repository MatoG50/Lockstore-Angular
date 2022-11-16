import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  product: any;
  productId;
  routeParamObs;
  editMode: boolean = false;

  ngOnInit(): void {
    this.routeParamObs = this.activatedRoute.paramMap.subscribe((param) => {
      this.productId = param.get('id');
      console.log(this.productId);
      this.authService.fetchProduct().subscribe((prod) => {
        // this.product = prod.Products[0];
        this.product = prod.Products.find((x) => {
          return x['product id'] === parseInt(this.productId);
        });
      });
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
    this.router.navigate(['/products/product', this.product['product id']], {
      queryParams: { edit: true },
    });
  }

  ngOnDestroy() {
    this.routeParamObs.unsubscribe();
  }
  // onDelete(id: number) {}
}
