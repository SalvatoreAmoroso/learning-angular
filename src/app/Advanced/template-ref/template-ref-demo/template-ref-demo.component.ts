import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Other/microsyntax/person';

@Component({
  selector: 'app-template-ref-demo',
  templateUrl: './template-ref-demo.component.html',
  styleUrls: ['./template-ref-demo.component.scss']
})
export class TemplateRefDemoComponent implements OnInit {

  entries: Person[] = []

  constructor() { this.entries.push({ name: "Salvatore", age: 22 }, { name: "Jennifer", age: 12 }) }

  ngOnInit(): void {
  }

}
