import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  user: string = '';
  role: string = '';
  constructor(private addEmployee: UserService) {}

  ngOnInit(): void {}

  addUser() {
    this.addEmployee.AddNewUser(this.user, this.role);
    console.log(this.addEmployee.users);
  }
}
