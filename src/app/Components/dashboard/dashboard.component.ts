import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

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
    this.user = localStorage.getItem('email').split('@')[0];
    this.authService.fetchProduct().subscribe((res) => {
      this.products = res.length;
    });
    this.authService.fetchUsers().subscribe((res) => {
      this.employees = res.length;
    });
  }
}
