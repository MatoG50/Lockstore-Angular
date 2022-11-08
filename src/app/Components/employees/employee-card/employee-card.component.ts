import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
})
export class EmployeeCardComponent implements OnInit {
  users: { name: string; role: string }[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.users;
  }
}
