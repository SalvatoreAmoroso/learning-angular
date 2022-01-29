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
  dropdownOptions: string[] = ["Pflicht", "Optional"];
  currentDropdownSel: string = this.dropdownOptions[0];

  constructor() {
    this.reset();
  }

  form1Submit(value: any) {
    this.task = value;
  }

  form2Submit(valid: boolean | null) {
    if (!valid) {
      console.warn("Form not valid, abort submit");
      return;
    }
  }

  reset() {
    this.task = model.createDefaultTask();
  }
}