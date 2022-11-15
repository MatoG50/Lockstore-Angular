import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/Models/employees';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
})
export class EmployeeCardComponent implements OnInit {
  isLoading: boolean = true;
  users: Employees[] = [];

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // this.users = this.userService.users;

    this.authService.fetchEmployees().subscribe((emp) => {
      console.log(emp);
      this.users = emp.users;
      this.isLoading = false;
    });
  }
}
