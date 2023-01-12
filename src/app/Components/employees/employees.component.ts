import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [],
})
export class EmployeesComponent implements OnInit {
  attendants;
  enteredText: string;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.fetchUsers().subscribe((res) => {
      console.log(res);
    });
  }
  onButtonClick() {
    console.log(this.enteredText);
  }
}
