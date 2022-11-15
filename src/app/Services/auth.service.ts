import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Product } from '../Models/products';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  loggedIn: boolean = true;

  constructor(private http: HttpClient, public router: Router) {}

  //  Login User
  loginUser(email: string, password: string) {
    this.http
      .post('https://storemanagerapi2.herokuapp.com/api/v2/auth/login', {
        email,
        password,
      })
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('user', res.username);
        localStorage.setItem('role', res.role);
        console.log(res);
      });
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  getUser() {
    return localStorage.getItem('user');
  }

  getRole() {
    return localStorage.getItem('role');
  }

  //  Fetch Products

  fetchProduct() {
    return this.http.get<any>(
      'https://storemanagerapi2.herokuapp.com/api/v2/products'
    );
  }

  // Delete Product

  deleteProduct(id: number) {
    return this.http.delete(
      'https://storemanagerapi2.herokuapp.com/api/v2/products/${id}'
    );
  }

  // Fetch Employees

  fetchEmployees() {
    return this.http.get<any>(
      'https://storemanagerapi2.herokuapp.com/api/v2/users'
    );
  }

  // Fetch Sales

  fetchSales() {
    return this.http.get<any>(
      'https://storemanagerapi2.herokuapp.com/api/v2/sales'
    );
  }

  login() {
    this.loggedIn = true;
    // this.router.navigate(['']);
  }

  logout() {
    this.loggedIn = false;

    localStorage.removeItem('user');
    localStorage.removeItem('role');

    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
    // this.router.navigate(['login'])
  }

  isAuthenticated() {
    return this.loggedIn;
  }
}
