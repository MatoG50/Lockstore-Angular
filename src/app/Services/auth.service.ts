import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Models/products';
import { map, switchMap } from 'rxjs/operators';
import { Sales } from '../Models/sales';
import { Employees } from '../Models/employees';
import { BehaviorSubject, from } from 'rxjs';
import { signInWithEmailAndPassword } from '@firebase/auth';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // headers = new HttpHeaders().set('Content-Type', 'application/json');
  loggedIn: boolean = false;

  // Behavior subject allow to send data across
  public search = new BehaviorSubject<string>('');
  currentUser = authState(this.auth);
  isLoggedIn = false;
  user;

  constructor(
    private auth: Auth,
    private http: HttpClient,
    public router: Router
  ) {}

  // Login
  login(email: string, password: string) {
    return from(
      signInWithEmailAndPassword(this.auth, email, password)
    ).subscribe(() => {
      this.user = this.currentUser.subscribe((res) => {
        console.log(res);
        localStorage.setItem('username', res.displayName);
        localStorage.setItem('email', res.email);
        localStorage.setItem('uid', res.uid);
        this.loggedIn = true;
      });

      console.log(this.user);
      this.router.navigate(['/']);
    });
  }

  // register
  signUp(name: string, email: string, password: string) {
    return from(
      createUserWithEmailAndPassword(this.auth, email, password)
    ).pipe(switchMap(({ user }) => updateProfile(user, { displayName: name })));
  }
  // Signout

  logout() {
    return from(this.auth.signOut()).subscribe(() => {
      localStorage.removeItem('username');
      localStorage.removeItem('email');
      localStorage.removeItem('uid');
      this.router.navigate(['/login']);
    });
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
  addUser(username: string, email: string, role: string, password: string) {
    this.http
      .post(
        'https://lockstore-28f22-default-rtdb.firebaseio.com/employees.json',
        { username, email, role, password }
      )
      .subscribe(() => {});
  }

  // Update product

  updateProduct(
    id: string,
    name: string,
    price: number,
    inventory: number,
    category: string
  ) {
    this.http
      .put(
        'https://lockstore-28f22-default-rtdb.firebaseio.com/products/' +
          id +
          '.json',
        {
          name,
          price,
          inventory,
          category,
        }
      )
      .subscribe(() => {
        alert('successfuly updated product');
      });
  }

  // Delete product
  deleteProduct(id: string) {
    return this.http.delete(
      'https://lockstore-28f22-default-rtdb.firebaseio.com/products/' +
        id +
        '.json'
    );
  }
}
