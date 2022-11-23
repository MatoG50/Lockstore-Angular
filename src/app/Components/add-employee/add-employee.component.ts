import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  reactiveForm: FormGroup;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      role: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.authService.newUser(
      this.reactiveForm.value.username,
      this.reactiveForm.value.email,
      this.reactiveForm.value.minimum_stock,
      this.reactiveForm.value.category
    );
    console.log(this.reactiveForm);
    this.reactiveForm.reset();
  }
}
