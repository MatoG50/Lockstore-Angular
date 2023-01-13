import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user: string = '';
  constructor(private auth: AuthService, public router: Router) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('email').split('@')[0];
  }

  logout() {
    this.auth.logout();
  }
}
