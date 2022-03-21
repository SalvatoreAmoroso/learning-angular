import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent {

  testingSwitchMap: number = 0;

  constructor() {
    this.switchMapExample();
  }

  switchMapExample() {
    let switchMap$ = fromEvent(document, "click")
      .pipe(
        switchMap(() => interval(1000))
      );


    switchMap$.subscribe(value => this.testingSwitchMap = value)
  }

}
