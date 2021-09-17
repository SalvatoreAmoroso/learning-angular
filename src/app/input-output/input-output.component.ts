import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss'],
})
export class InputOutputComponent implements OnInit {
  innerVarFromOutside: string = 'Zalli';

  constructor() {}

  ngOnInit(): void {}

  innerComponentChanged(text: string) {
    console.log('Outer: My inner changed to ' + text);
    this.innerVarFromOutside = text;
  }
}
