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
  @Output() changeEvent: EventEmitter<string> = new EventEmitter();
  //Simpler Two Way Binding
  @Output() passedVarChange: EventEmitter<string> = new EventEmitter();

  constructor() {
    //passedVar cannot be used here. Use ngOnInit instead.
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

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
