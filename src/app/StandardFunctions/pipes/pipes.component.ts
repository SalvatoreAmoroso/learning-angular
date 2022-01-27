import { DecimalPipe } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  message: string;
  deciPipe: DecimalPipe;
  currentDate = new Date();

  dateString = '2018-07-05T19:05:03+02:00';

  time = {
    hours: 12,
    minutes: 4,
    seconds: 8
  };

  header = 'Ich bin eine Überschrift';
  email = 'John@Doe.com';

  date = new Date();
  pi = Math.PI;
  completed = 0.79;
  price = 0.79;
  counter = timer(2000, 1000);

  currentUser = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'John@Doe.com'
  };

  promise = new Promise(
    (resolve) => {
      setTimeout(() => {
        resolve('Der asynchrone Wert wurde geladen');
      }, 5000);
    });

  friends = ['Bob', 'Jane', 'John', 'Mary'];

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(@Inject(LOCALE_ID) localeId: any) {
    this.deciPipe = new DecimalPipe(localeId);
  }

  ngOnInit(): void {
  }

  dontSort(a: any, b: any) {
    return 0;
  }

  addFriend(name: string) {
    this.friends.push(name);
  }
}
