import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-io1-inner',
  templateUrl: './io1-inner.component.html',
  styleUrls: ['./io1-inner.component.scss'],
})
export class IO1InnerComponent implements OnInit, OnChanges {
  @Input() passedVar: string = '';
  @Output() changeEvent: EventEmitter<string>;

  //Simpler Two Way Binding
  @Output() passedVarChange: EventEmitter<string>;

  constructor() {
    this.changeEvent = new EventEmitter();
    this.passedVarChange = new EventEmitter();
    //passedVar cannot be used here. Use ngOnInit instead.
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Input data has changed:\n' + changes);
  }

  inputChanged(text: string) {
    this.emitChanges(text);
  }

  reset(): void {
    const resetStr: string = 'resettet';

    this.passedVar = resetStr;
    this.emitChanges(resetStr);
  }

  private emitChanges(text: string) {
    this.changeEvent.emit(text);
    this.passedVarChange.emit(text);
  }
}
