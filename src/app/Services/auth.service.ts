import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: boolean = true;

  constructor() {}
  login() {
    this.loggedIn = true;
    // this.router.navigate(['']);
  }

  logout() {
    this.loggedIn = false;
    // this.router.navigate(['login'])
  }

  isAuthenticated() {
    return this.loggedIn;
  }
}
