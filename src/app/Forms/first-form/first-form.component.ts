import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.scss']
})
export class FirstFormComponent {

  constructor() { }

  saveTask(value: any) {
    console.log(value)
  }
}
