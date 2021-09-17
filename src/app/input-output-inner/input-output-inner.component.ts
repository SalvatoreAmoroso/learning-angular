import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output-inner',
  templateUrl: './input-output-inner.component.html',
  styleUrls: ['./input-output-inner.component.scss'],
})
export class InputOutputInnerComponent implements OnInit {
  @Input() passedVar: string = '';
  @Output() changeEvent: EventEmitter<string>;

  constructor() {
    this.changeEvent = new EventEmitter();
    //passedVar cannot be used here. Use ngOnInit instead.
  }

  ngOnInit(): void {}

  inputChanged(text: string) {
    this.changeEvent.emit(text);
  }
}
