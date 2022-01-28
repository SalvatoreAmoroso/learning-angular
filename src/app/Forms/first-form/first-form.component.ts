import { Component } from '@angular/core';
import * as model from "./model-interfaces"

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.scss']
})
export class FirstFormComponent {

  model = model; //Interface wird in der HTML zugänglich
  task: model.Task;

  constructor() {
    this.reset();
  }

  saveTask(value: any) {
    this.task = value;
  }

  reset() {
    this.task = model.createDefaultTask();
  }
}