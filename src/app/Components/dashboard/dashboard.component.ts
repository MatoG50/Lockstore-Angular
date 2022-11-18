import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { LoggerService } from '../../Services/logger.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user: string = '';
  products: number;
  employees: number;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.authService.fetchEmployees().subscribe((emp) => {
      this.employees= emp.users.length;
    });
    this.authService.fetchProduct().subscribe((prod) => {
      this.products=prod.Products.length;
    });
  }
}
