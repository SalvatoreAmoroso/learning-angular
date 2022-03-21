import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, of } from 'rxjs';
import { delay, map, mapTo, mergeMap, scan, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent {

  testingSwitchMap: number = 0;
  testingScan1: string = "";
  testingScan2: string[] = [];

  constructor() {
    this.switchMapExample();
    this.scanExample1();
    this.scanExample2();
  }

  switchMapExample() {
    let switchMap$ = fromEvent(document, "click")
      .pipe(
        switchMap(() => interval(1000))
      );


    switchMap$.subscribe(value => this.testingSwitchMap = value)
  }

  scanExample1() {
    let source$ = of(1, 2, 3);

    let scan$ = source$.pipe(
      scan(
        (acc, curr) => acc + curr, 0
      )
    );

    scan$.subscribe(value => this.testingScan1 += (value + "<br>"));
  }

  scanExample2() {
    let fakeRequest$ = interval(1000);

    let scan$ = fakeRequest$.pipe(
      map(val => val.toString()),
      scan(
        (acc: string[], curr: string) => [...acc, curr], [] //<= Seed
      )
    )

    scan$.subscribe(value => this.testingScan2 = value)
  }
}
