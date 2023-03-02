import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

// Confirm password
export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmpassword = control.get('confirmpassword')?.value;
    if (password && confirmpassword && password !== confirmpassword) {
      return {
        passwordsDontMatch: true,
      };
    }
    return null;
  };
}

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  reactiveForm: FormGroup;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reactiveForm = this.fb.group(
      {
        name: [null, Validators.required],
        email: [null, Validators.required],
        role: [null, Validators.required],
        password: [null, Validators.required],
        confirmpassword: [null, Validators.required],
      },
      { validators: passwordsMatchValidator() }
    );
  }
  onSubmit() {
    if (!this.reactiveForm) return;
    const { name, email, password } = this.reactiveForm.value;
    this.authService.signUp(name, email, password).subscribe(
      () => {
        alert('Successfully Created');
        this.router.navigate(['/login']);
      },
      (error) => {
        alert(error);
      }
    );
    this.authService.addUser(
      name,
      email,
      this.reactiveForm.value.role,
      password
    );
  }
}
