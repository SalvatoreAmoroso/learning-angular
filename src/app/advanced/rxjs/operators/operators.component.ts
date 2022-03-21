import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, interval, Observable, of } from 'rxjs';
import { map, mapTo, scan, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements AfterViewInit {

  @ViewChild("red") redButton: ElementRef;
  @ViewChild("black") blackButton: ElementRef;

  redTotal: number = 0;
  blackTotal: number = 0;
  total: number = 0;

  testingSwitchMap: number = 0;
  testingScan1: string = "";
  testingScan2: string[] = [];

  constructor() {
    this.switchMapExample();
    this.scanExample1();
    this.scanExample2();
  }

  ngAfterViewInit(): void {
    this.combineLatestExample();
  }

  private switchMapExample() {
    let switchMap$ = fromEvent(document, "click")
      .pipe(
        switchMap(() => interval(1000))
      );


    switchMap$.subscribe(value => this.testingSwitchMap = value)
  }

  private scanExample1() {
    let source$ = of(1, 2, 3);

    let scan$ = source$.pipe(
      scan(
        (acc, curr) => acc + curr, 0
      )
    );

    scan$.subscribe(value => this.testingScan1 += (value + "<br>"));
  }

  private scanExample2() {
    let fakeRequest$ = interval(1000);

    let scan$ = fakeRequest$.pipe(
      map(val => val.toString()),
      scan(
        (acc: string[], curr: string) => [...acc, curr], [] //<= Seed
      )
    )

    scan$.subscribe(value => this.testingScan2 = value)
  }

  private combineLatestExample() {

    const addClickCounter$ = (btn: ElementRef) =>
      fromEvent(btn.nativeElement, 'click').pipe(
        // map every click to 1
        mapTo(1),
        // Zählt hoch, wie oft der Button gedrückt wurde
        scan((acc, curr) => acc + curr, 0),
        //Das hier ist nötig. combineLatest würde sonst darauf warten, bis sowohl der rote als auch der Blaue Button einen Wert emittet haben. Hier wird der Startwert 0 künstlich emittet.
        startWith(0)
      );

    combineLatest([addClickCounter$(this.redButton), addClickCounter$(this.blackButton)])
      .subscribe(([red, black]: any) => {
        this.redTotal = red;
        this.blackTotal = black;
        this.total = red + black;
      });
  }

}
