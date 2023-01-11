import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class TokenInterceptorService {
//   constructor(private authService: AuthService) {}

//   intercept(req, next) {
//     const authToken = this.authService.getToken();

//     req = req.clone({
//       setHeaders: { Authorization: 'Bearer ' + authToken },
//     });
//     return next.handle(req);
//   }
// }
