import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Models/products';
import { map } from 'rxjs/operators';
import { Sales } from '../Models/sales';
import { Employees } from '../Models/employees';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { timeStamp } from 'console';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // headers = new HttpHeaders().set('Content-Type', 'application/json');
  // loggedIn: boolean = true;

  constructor(
    private fireauth: AngularFireAuth,
    private http: HttpClient,
    public router: Router
  ) {}

  // Login
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        alert('something went wrong');
        this.router.navigate(['/login']);
      }
    );
  }

  // register
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      () => {
        alert('Registration successful');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/register']);
      }
    );
  }

  // Signout

  logout() {
    this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  // Fetch product Firebase
  fetchProduct() {
    return (
      this.http
        .get<{ [key: string]: Product }>(
          'https://lockstore-28f22-default-rtdb.firebaseio.com/products.json'
        )

        // Fetch array firebase
        .pipe(
          map((res) => {
            const products = [];
            for (const key in res) {
              if (res.hasOwnProperty(key)) {
                products.push({ ...res[key], id: key });
              }
            }
            return products;
          })
        )
    );
  }

  // Fetch sales Firebase
  fetchSales() {
    return this.http
      .get<{ [key: string]: Sales }>(
        'https://lockstore-28f22-default-rtdb.firebaseio.com/sales.json'
      )
      .pipe(
        map((res) => {
          const sales = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              sales.push({ ...res[key], id: key });
            }
          }
          return sales;
        })
      );
  }

  // Fetch employees firebase

  fetchUsers() {
    return this.http
      .get<{ [key: string]: Employees }>(
        'https://lockstore-28f22-default-rtdb.firebaseio.com/employees.json'
      )
      .pipe(
        map((res) => {
          const employees = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              employees.push({ ...res[key], id: key });
            }
          }
          return employees;
        })
      );
  }

  // Add product
  createProduct(
    name: string,
    inventory: number,
    price: number,
    category: string
  ) {
    this.http
      .post(
        'https://lockstore-28f22-default-rtdb.firebaseio.com/products.json',
        { name, inventory, price, category }
      )
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['/products']);
      });
  }

  // Add user
  addUser(username: string, email: string, password: string, role: string) {
    this.http
      .post(
        'https://lockstore-28f22-default-rtdb.firebaseio.com/employees.json',
        { username, email, password, role }
      )
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['/employees']);
      });
  }
}
