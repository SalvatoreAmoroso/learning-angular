import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent, interval, Observable } from 'rxjs';
import { map, scan, startWith, switchMap } from 'rxjs/operators';
import { RandomService } from 'src/app/Utils/random.service';
import { Letter, Letters, State } from '../interfaces';

@Component({
  selector: 'app-alphabet-invasion',
  templateUrl: './alphabet-invasion.component.html',
  styleUrls: ['./alphabet-invasion.component.scss'],
})
export class AlphabetInvasionComponent implements OnInit {
  levelChangeThreshold: number = 20;
  speedAdjust: number = 50;
  endThreshold: number = 15;
  gameWidth: number = 30;
  intervalSubject: BehaviorSubject<number> = new BehaviorSubject(600);
  letters$: Observable<Letters>;
  game$: Observable<State>;

  constructor(randService: RandomService) {
    this.letters$ = this.intervalSubject.pipe(
      switchMap((i) =>
        interval(i).pipe(
          scan<number, Letters>(
            (letters) => ({
              intrvl: i,
              ltrs: [
                {
                  letter: randService.randomSmallLetter(),
                  yPos: Math.floor(Math.random() * this.gameWidth),
                },
                ...letters.ltrs,
              ],
            }),
            { ltrs: [], intrvl: 0 }
          )
        )
      )
    );

    // this.game$ =
  }

  ngOnInit(): void {
    fromEvent(document, 'keydown').pipe(
      startWith({ key: '' }),
      map((e: any) => e.key)
    );
  }

  renderGame(state: State) {
    //Score
    document.body.innerHTML = `Score: ${state.score}, Level: ${state.level}<br/>`;

    //Main Board
    state.letters.forEach(
      (l: Letter) =>
        (document.body.innerHTML += '&nbsp'.repeat(l.yPos) + l.letter + '<br/>')
    );

    //Death Line
    document.body.innerHTML +=
      '<br/>'.repeat(this.endThreshold - state.letters.length - 1) +
      '-'.repeat(this.gameWidth);
  }

  renderGameOver() {
    document.body.innerHTML += '<br/>GAME OVER!';
  }

  noop() {}
}
