import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [],
})
export class EmployeesComponent implements OnInit {
  enteredText: string;
  constructor() {}

  ngOnInit(): void {}
  onButtonClick() {
    console.log(this.enteredText);
  }
}
