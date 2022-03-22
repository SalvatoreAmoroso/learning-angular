import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest, concat, fromEvent, interval, merge, Observable, of } from 'rxjs';
import { map, mapTo, scan, startWith, switchMap, withLatestFrom } from 'rxjs/operators';
import { ajax, AjaxResponse } from 'rxjs/ajax';

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
  testingMerge: string[] = [];
  testingConcat: string[] = [];
  testingWithLastestFrom: string = "";
  testingWithLastestFrom2: string = "";
  testingAjax: string = "";
  testingAjaxJson: string = "";

  constructor() {
    this.switchMapExample();
    this.scanExample1();
    this.scanExample2();
    this.mergeExample();
    this.concatExample();
    this.withLatestFromExample();
    this.ajaxExample();
    this.ajaxExample2();
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

  private mergeExample() {
    //emit every 2.5 seconds
    const first = interval(2500);
    //emit every 2 seconds
    const second = interval(2000);
    //emit every 1.5 seconds
    const third = interval(1500);
    //emit every 1 second
    const fourth = interval(1000);

    //emit outputs from one observable
    const example$ = merge(
      first.pipe(mapTo('FIRST!')),
      second.pipe(mapTo('SECOND!')),
      third.pipe(mapTo('THIRD')),
      fourth.pipe(mapTo('FOURTH'))
    );

    example$.subscribe(val => this.testingMerge = [...this.testingMerge, val]);
  }

  private concatExample() {
    let concat$ = concat(
      of("Observable A: 1", "Observable A: 2", "Observable A: 3"),
      // subscribed after first completes
      of("Observable B: 4", "Observable B: 5", "Observable B: 6"),
      // subscribed after second completes
      of("Observable C: ", "Observable C: 8", "Observable C: 9")
    );

    concat$.subscribe(val => this.testingConcat = [...this.testingConcat, val]);
  }

  private withLatestFromExample() {

    //emit every 5s
    const slowSource = interval(5000);
    //emit every 2.5s
    const fastSource = interval(2500);

    const example = slowSource.pipe(
      withLatestFrom(fastSource),
      map(([first, second]) => `Slow Source: ${first} || Fast Source: ${second}<br>`)
    );

    const example2 = fastSource.pipe(
      withLatestFrom(slowSource),
      map(([first, second]) => `Fast Source: ${first} || Slow Source: ${second}<br>`)
    );

    example.subscribe(val => this.testingWithLastestFrom += val);
    example2.subscribe(val => this.testingWithLastestFrom2 += val);
  }

  private ajaxExample() {
    const githubUsers = `https://api.github.com/users?per_page=1`;

    const users: Observable<AjaxResponse> = ajax(githubUsers);

    users.subscribe(
      res => this.testingAjax = JSON.stringify(res),
      err => this.testingAjax = err
    )
  }

  private ajaxExample2() {
    const githubUsers = `https://api.github.com/users?per_page=1`;

    const users: Observable<AjaxResponse> = ajax.getJSON(githubUsers);

    users.subscribe(
      res => this.testingAjaxJson = JSON.stringify(res),
      err => this.testingAjaxJson = err
    )
  }
}
