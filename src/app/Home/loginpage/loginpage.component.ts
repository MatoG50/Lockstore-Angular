import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private authGuard: AuthService, private router: Router) {}

  ngOnInit(): void {}
  login() {}

  onSubmit() {
    // const email = this.reactiveForm.value.email;
    // const password = this.reactiveForm.value.password;
  }
}
