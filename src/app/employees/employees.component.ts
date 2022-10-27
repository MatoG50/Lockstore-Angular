import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [],
})
export class EmployeesComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
}
