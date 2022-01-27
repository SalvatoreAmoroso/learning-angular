import { Injectable } from '@angular/core';

export abstract class AbstractDataService {
  abstract getFriends(): any[];
  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
@Injectable() //This makes it injectable
export class DataServiceOne extends AbstractDataService {

  constructor() { super() }

  getFriends() {
    return [
      { name: "Max", age: this.getRandomInt(65) },
      { name: "Donald", age: this.getRandomInt(65) }
    ]
  }
}

@Injectable() //This makes it injectable
export class DataServiceTwo extends AbstractDataService {

  constructor() { super() }

  getFriends() {
    return [
      { name: "Max", age: this.getRandomInt(65) },
      { name: "Donald", age: this.getRandomInt(65) },
      { name: "Tim", age: this.getRandomInt(65) }
    ]
  }
}