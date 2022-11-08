import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../Services/logger.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  inputText: string;

  constructor(private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.loggerService.dataEmitter.subscribe((val) => {
      this.inputText = val;
    });
  }
}
