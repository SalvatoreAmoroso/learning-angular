import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-io2-inner',
  templateUrl: './io2-inner.component.html',
  styleUrls: ['./io2-inner.component.scss'],
})
export class Io2InnerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  callThisFromOutside(): string {
    console.log('hello from the inner component');
    return 'Hi! Im the inner component.';
  }
}
