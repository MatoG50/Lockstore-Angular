import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  reactiveForm: FormGroup;
  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      username: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      role: [null, Validators.required],
    });
  }

  onSubmit() {
    this.authService.addUser(
      this.reactiveForm.value.username,
      this.reactiveForm.value.email,
      this.reactiveForm.value.password,
      this.reactiveForm.value.role
    );
    console.log(this.reactiveForm);
    this.reactiveForm.reset();
  }
}
