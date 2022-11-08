import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  loginUser(email: string, password: string) {
    this.http
      .post('https://storemanagerapi2.herokuapp.com/api/v2/auth/login', {
        email,
        password,
      })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
