import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { HttpService } from '../Services/http.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(
    private authGuard: AuthService,
    private router: Router,
    private http: HttpService
  ) {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }
  login() {
    this.authGuard.login();
  }

  onSubmit() {
    // const email = this.reactiveForm.value.email;
    // const password = this.reactiveForm.value.password;
    console.log(this.reactiveForm.value);

    this.http.loginUser(
      this.reactiveForm.value.email,
      this.reactiveForm.value.password
    );
    this.router.navigate(['']);
    this.reactiveForm.reset();
  }
}
