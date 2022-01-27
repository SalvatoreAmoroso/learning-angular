import { Injectable } from '@angular/core';

@Injectable() //This makes it injectable
export class DataService {

  constructor() { }

  getFriends() {
    return [
      { name: "Max", age: 30 },
      { name: "Donald", age: 25 }
    ]
  }
}

