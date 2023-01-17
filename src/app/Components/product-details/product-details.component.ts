import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/products';
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
    private fb: FormBuilder
  ) {}
  reactiveForm: FormGroup;
  allProducts: Product[] = [];
  productId;
  routeParamObs;

  ngOnInit(): void {
    // Form
    this.reactiveForm = this.fb.group({
      name: ['', Validators.required],
      inventory: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
    });

    // Get route
    this.routeParamObs = this.activatedRoute.paramMap.subscribe((param) => {
      this.productId = param.get('id');
    });
    // fetch all products
    this.authService.fetchProduct().subscribe((prod) => {
      this.allProducts = prod;

      let currentProduct = this.allProducts.find((p) => {
        return p.id === this.productId;
      });

      this.reactiveForm.patchValue({
        name: currentProduct.name,
        price: currentProduct.price,
        inventory: currentProduct.inventory,
        category: currentProduct.category,
      });
    });
  }

  onUpdate() {
    this.authService.updateProduct(
      this.productId,
      this.reactiveForm.value.name,
      this.reactiveForm.value.price,
      this.reactiveForm.value.inventory,
      this.reactiveForm.value.category
    );
  }
  onDelete() {
    this.authService.deleteProduct(this.productId);
  }
  ngOnDestroy() {
    this.routeParamObs.unsubscribe();
  }
}
