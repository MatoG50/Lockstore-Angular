import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
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
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}
  reactiveForm: FormGroup = this.formBuilder.group({
    name: [null, Validators.required],
    price: [null, Validators.required],
    inventory: [null, Validators.required],
    minimum_stock: [null, Validators.required],
    category: [null, Validators.required],
  });
  product: any;
  productId;
  routeParamObs;
  editMode: boolean = false;

  ngOnInit(): void {
    this.routeParamObs = this.activatedRoute.paramMap.subscribe((param) => {
      this.productId = param.get('id');
    });

    // this.authService.fetchProduct().subscribe((prod) => {
    //   // this.product = prod.Products[0];
    //   this.product = prod.Products.find((x) => {
    //     return x['product id'] === parseInt(this.productId);
    //   });
    //   this.reactiveForm.patchValue({
    //     name: this.product.name,
    //     price: this.product.price,
    //     inventory: this.product.inventory,
    //     minimum_stock: this.product.minimum_stock,
    //     category: this.product.category,
    //   });
    // });

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

  // onUpdate(id) {
  //   console.log(this.reactiveForm);
  //   this.authService.updateProduct(
  //     id,
  //     this.reactiveForm.value.name,
  //     this.reactiveForm.value.price,
  //     this.reactiveForm.value.inventory,
  //     this.reactiveForm.value.minimum_stock,
  //     this.reactiveForm.value.category
  //   );
  // }
  // onDelete(productId) {
  //   this.authService.deleteProduct(productId);
  // }

  onUpdate() {}
  onDelete() {}
  ngOnDestroy() {
    this.routeParamObs.unsubscribe();
  }
}
