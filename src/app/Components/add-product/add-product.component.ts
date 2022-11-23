import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      inventory: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      minimum_stock: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.authService.createProduct(
      this.reactiveForm.value.name,
      this.reactiveForm.value.price,
      this.reactiveForm.value.inventory,
      this.reactiveForm.value.minimum_stock,
      this.reactiveForm.value.category
    );

    console.log(this.reactiveForm);
    // this.reactiveForm.reset();
  }
}
