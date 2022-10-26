import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  LogMessage(name: string, role: string) {
    console.log(
      `A new user with username '${name}' and role '${role}' has been added`
    );
  }

  constructor() {}
}
