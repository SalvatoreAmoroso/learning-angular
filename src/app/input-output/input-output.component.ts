import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss'],
})
export class InputOutputComponent implements OnInit {
  innerVar: string = 'Zalli';

  constructor() {}

  ngOnInit(): void {}

  innerComponentChanged(text: string) {
    console.log('Outer: My inner changed to ' + text);
    this.innerVar = text;
  }
}
