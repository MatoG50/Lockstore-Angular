import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/products';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  reactiveForm: FormGroup = this.formBuilder.group({
    name: [null, Validators.required],
    price: [null, Validators.required],
    inventory: [null, Validators.required],
    category: [null, Validators.required],
  });
  product: Product[] = [];
  productId;
  // routeParamObs;
  allProducts;

  ngOnInit(): void {
    // Form
    this.reactiveForm = this.formBuilder.group({
      name: ['', Validators.required],
      inventory: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
    });

    // Get route
    // this.routeParamObs = this.activatedRoute.paramMap.subscribe((param) => {
    //   this.productId = param.get('id');
    // });
    this.productId = this.data.id;

    // Fetch all products
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
    const { name, price, inventory, category } = this.reactiveForm.value;
    this.authService.updateProduct(
      this.productId,
      name,
      price,
      inventory,
      category
    );
  }
  // ngOnDestroy() {
  //   this.routeParamObs.unsubscribe();
  // }
  goBack() {
    this.dialogRef.close();
  }
  onDelete() {
    this.authService.deleteProduct(this.productId).subscribe(() => {
      alert('successful');
    });
  }
}
