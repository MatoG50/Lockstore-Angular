import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public searchTerm: string = '';

  date = new Date();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.authService.search.next(this.searchTerm);
  }
}
