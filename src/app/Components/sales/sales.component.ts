import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sales } from 'src/app/Models/sales';
import { AuthService } from 'src/app/Services/auth.service';
// import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  isLoading = true;
  sales: Sales[] = [];
  // USING CREATE METHOD

  // myObservable = new Observable((observer) => {
  //   console.log('Observable starts');

  //   observer.next('1');
  //   observer.next('2');
  //   observer.next('3');
  //   observer.next('4');
  //   observer.next('5');
  // });

  // USING CREATE METHOD
  // myObservable = Observable.create((observer) => {
  //   setTimeout(() => {
  //     observer.next('1');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('2');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('3');
  //   }, 3000);
  //   // setTimeout(() => {
  //   //   observer.error(new Error('Something went worng, please try again later'));
  //   // }, 3000);
  //   setTimeout(() => {
  //     observer.next('4');
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next('5');
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 8000);
  // });

  // array1 = [1, 2, 3, 4, 5];
  // array2 = ['a', 'b', 'c', 'd'];

  // Operators

  // myObs = from(this.array1).pipe(map(val)=>{
  //   return val*5
  // })

  constructor(private route: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.fetchSales().subscribe((user) => {
      this.sales = user;
      this.isLoading = false;
    });
  }
}
