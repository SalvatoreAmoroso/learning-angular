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
      { name: "Max", age: this.getRandomInt(65) }
    ]
  }
}

@Injectable() //This makes it injectable
export class DataServiceTwo extends AbstractDataService {

  constructor() { super() }

  getFriends() {
    return [
      { name: "Max", age: this.getRandomInt(65) },
      { name: "Donald", age: this.getRandomInt(65) }
    ]
  }
}

//Treeshakable-Provider
//Define providers on module level. Treeshakable-Provider DONT replace component-based providers!
@Injectable({
  providedIn: "root"
}) //Since Angular 6 you can specify the provider here. Therefore you dont need to specify the provider in app.module.ts.

export class DataServiceThree extends AbstractDataService {

  constructor() { super() }

  getFriends() {
    return [
      { name: "Max", age: this.getRandomInt(65) },
      { name: "Donald", age: this.getRandomInt(65) },
      { name: "Tim", age: this.getRandomInt(65) }
    ]
  }
}