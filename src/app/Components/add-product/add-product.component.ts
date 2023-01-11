import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  constructor(private authService: AuthService, private fb: FormBuilder) {}
  reactiveForm: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      name: [null, Validators.required],
      inventory: [null, Validators.required],
      price: [null, Validators.required],
      category: [null, Validators.required],
    });
  }

  onSubmit() {
    console.log(this.reactiveForm);
    this.authService.createProduct(
      this.reactiveForm.value.name,
      this.reactiveForm.value.inventory,
      this.reactiveForm.value.price,
      this.reactiveForm.value.category
    );
    this.reactiveForm.reset();
  }
}
