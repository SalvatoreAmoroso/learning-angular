import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = "";
  age: number = 0;
  constructor() {
    this.name = "Salvatore";
    this.age = 12;
  }
}
