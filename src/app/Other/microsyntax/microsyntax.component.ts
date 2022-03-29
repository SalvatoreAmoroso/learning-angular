import { Component, OnInit } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-microsyntax',
  templateUrl: './microsyntax.component.html',
  styleUrls: ['./microsyntax.component.scss']
})

export class MicrosyntaxComponent implements OnInit {

  persons: Person[] = []
  constructor() {
    this.persons.push({ name: "Max", age: 22 }, { name: "Tim", age: 30 })
  }

  ngOnInit(): void {
  }

}
