import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

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
  }
}
