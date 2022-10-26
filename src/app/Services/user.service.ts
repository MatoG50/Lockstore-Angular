import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private loggerService: LoggerService) {}

  users = [
    {
      name: 'John',
      role: 'admin',
    },
    {
      name: 'Mark',
      role: 'attendant',
    },
    {
      name: 'Steve',
      role: 'attendant',
    },
  ];

  AddNewUser(name: string, role: string) {
    this.users.push({ name: name, role: role });
    this.loggerService.LogMessage(name, role);
  }
}
