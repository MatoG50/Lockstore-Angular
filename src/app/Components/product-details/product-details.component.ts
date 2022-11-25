import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
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
    private authService: AuthService
  ) {}
  reactiveForm: FormGroup;
  product: any;
  productId;
  routeParamObs;
  editMode: boolean = false;

  ngOnInit(): void {
    this.routeParamObs = this.activatedRoute.paramMap.subscribe((param) => {
      this.productId = param.get('id');
      this.authService.fetchProduct().subscribe((prod) => {
        // this.product = prod.Products[0];
        this.product = prod.Products.find((x) => {
          return x['product id'] === parseInt(this.productId);
        });
        this.reactiveForm = new FormGroup({
          name: new FormControl(`${this.product?.name}`, Validators.required),
          inventory: new FormControl(
            `${this.product?.inventory}`,
            Validators.required
          ),
          price: new FormControl(`${this.product?.price}`, Validators.required),
          minimum_stock: new FormControl(
            `${this.product?.minimum_stock}`,
            Validators.required
          ),
          category: new FormControl(
            `${this.product?.category}`,
            Validators.required
          ),
        });
      });
    });

    // Observable

    // this.activatedRoute.queryParamMap.subscribe((param) => {
    //   this.editMode = Boolean(param.get('edit'));
    // });
  }
  // appendQueryParam() {
  //   this.router.navigate(['/products/product', this.product['product id']], {
  //     queryParams: { edit: true },
  //   });
  // }
  onUpdate(id) {
    console.log(this.reactiveForm);
    this.authService.updateProduct(
      id,
      this.reactiveForm.value.name,
      this.reactiveForm.value.price,
      this.reactiveForm.value.inventory,
      this.reactiveForm.value.minimum_stock,
      this.reactiveForm.value.category
    );
  }
  onDelete(productId) {
    this.authService.deleteProduct(productId);
  }
  ngOnDestroy() {
    this.routeParamObs.unsubscribe();
  }
}
