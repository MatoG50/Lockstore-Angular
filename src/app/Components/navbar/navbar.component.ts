import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private authGuard: AuthService, public router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.authGuard.logout();
    this.router.navigate(['login']);
  }
}
