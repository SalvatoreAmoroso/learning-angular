import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-io1',
  templateUrl: './io1.component.html',
  styleUrls: ['./io1.component.scss'],
})
export class IO1Component implements OnInit {
  innerVarFromOutside: string = 'Zalli';

  constructor() {}

  ngOnInit(): void {}

  innerComponentChanged(text: string) {
    console.log('Outer: My inner changed to ' + text);
    this.innerVarFromOutside = text;
  }
}
