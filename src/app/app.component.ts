import { Component } from '@angular/core';
import { Fuel } from './model/fuel';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mm95: number = 5102;
  mm100: number = 5526;
  days: number = 30;
  sum1: number = 0;
  sum2: number = 0;
  month: string = 'Ноември';
  data: Fuel[] = [
    {
      day: 1,
      m95: 282.25,
      m100: 140.88,
      date: new Date(),
    },
  ];
  time = this.data[this.data.length - 1].date;
  sum95 = this.data.forEach((item) => {
    this.sum1 += Number(item.m95);
    console.log(this.sum1);
  });

  sum100 = this.data.forEach((item) => {
    this.sum2 += Number(item.m100);
    console.log(this.sum2);
  });
  flag100: boolean =
    this.sum2 - (this.mm100 * this.data.length) / this.days > 0;
  returnCondition(sum: number, fuel: number): string {
    return sum - (fuel * this.data.length) / this.days > 0
      ? 'сме наваксали с'
      : 'сме изостанали с';
  }
  condition95 = this.returnCondition(this.sum1, this.mm95);
  condition100 = this.returnCondition(this.sum2, this.mm100);
}
