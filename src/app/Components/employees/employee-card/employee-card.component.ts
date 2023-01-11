import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/Models/employees';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
})
export class EmployeeCardComponent implements OnInit {
  isLoading: boolean = true;
  employees: Employees[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.fetchUsers().subscribe((emp) => {
      this.employees = emp;
      this.isLoading = false;
    });
  }
}
