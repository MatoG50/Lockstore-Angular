import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../Services/logger.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [],
})
export class EmployeesComponent implements OnInit {
  enteredText: string;
  constructor(private loggerService: LoggerService) {}

  ngOnInit(): void {}
  onButtonClick() {
    console.log(this.enteredText);
    this.loggerService.raiseDataEmitterEvent(this.enteredText);
  }
}
