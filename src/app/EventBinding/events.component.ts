import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  counter: number = 0
  color: string = ""
  constructor() { }

  ngOnInit(): void {
  }


  changeColor(color: string) {
    this.color = color 
  }

  increment() {
    this.counter++
  }

  decrement() {
    this.counter--
  }
}
