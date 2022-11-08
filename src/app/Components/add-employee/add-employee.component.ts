import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../Services/logger.service';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  user: string = '';
  role: string = '';
  constructor(
    private userService: UserService,
    private loggerService: LoggerService
  ) {}

  ngOnInit(): void {}

  addUser() {
    this.userService.AddNewUser(this.user, this.role);
  }
}
