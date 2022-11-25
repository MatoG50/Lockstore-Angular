import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  loggedIn: boolean = true;

  constructor(private http: HttpClient, public router: Router) {}

  isAuthenticated() {
    return this.loggedIn;
  }

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
        this.loggedIn = true;
        console.log(res);
        this.router.navigate(['/dashboard']);
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

  //  Create Product

  createProduct(
    name: string,
    price: string,
    inventory: number,
    minimum_stock: number,
    category: string
  ) {
    this.http
      .post('https://storemanagerapi2.herokuapp.com/api/v2/products', {
        name,
        price,
        inventory,
        minimum_stock,
        category,
      })
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['/products']);
      });
  }

  // Delete Product

  deleteProduct(id: any) {
    return this.http
      .delete(`https://storemanagerapi2.herokuapp.com/api/v2/products/${id}`)
      .subscribe(() => {
        this.router.navigate(['/products']);
      });
  }
  // Update Product

  updateProduct(
    id: number,
    name: string,
    price: string,
    inventory: number,
    minimum_stock: number,
    category: string
  ) {
    return this.http
      .put(`https://storemanagerapi2.herokuapp.com/api/v2/products/${id}`, {
        name,
        price,
        inventory,
        minimum_stock,
        category,
      })
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['/products']);
      });
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

  newUser(username: string, email: string, password: string, role: string) {
    this.http
      .post('https://storemanagerapi2.herokuapp.com/api/v2/auth/signup', {
        username,
        email,
        password,
        role,
      })
      .subscribe((res: any) => {
        console.log(res);
        this.router.navigate(['/employees']);
      });
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
      this.router.navigate(['/login']);
    }
  }
}
