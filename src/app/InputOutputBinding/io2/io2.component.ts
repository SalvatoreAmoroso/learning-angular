import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Io2InnerComponent } from '../io2-inner/io2-inner.component';

@Component({
  selector: 'app-io2',
  templateUrl: './io2.component.html',
  styleUrls: ['./io2.component.scss'],
})
export class Io2Component implements OnInit, AfterViewInit {
  //Initializes a list of all Io2InnerComponent used in the html template
  @ViewChildren(Io2InnerComponent)
  io2InnerComponents: QueryList<Io2InnerComponent>;

  //Initializes the first element of the Io2InnerComponent used in the html template
  @ViewChild(Io2InnerComponent)
  firstIo2InnerComponent: Io2InnerComponent;

  //Initializes the Io2InnerComponent declared by a local var in the html template
  @ViewChild('firstIo2Inner')
  firstIo2InnerComponentDefinedByLocalVar: Io2InnerComponent;

  messageFromInnerComponent: string;

  //ChangeDetectorRef: See comment below
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(
      'Number of io2-inner used in io2: ' + this.io2InnerComponents.length
    );
    if (this.io2InnerComponents.length > 0) {
      this.messageFromInnerComponent =
        this.io2InnerComponents.first.callThisFromOutside();
      this.firstIo2InnerComponent.callThisFromOutside();
    }

    if (this.firstIo2InnerComponentDefinedByLocalVar) {
      this.firstIo2InnerComponentDefinedByLocalVar.callThisFromOutside();
    }

    //Detect changes manually after the inner component updates the view of the outer component.
    //Otherwise the changes are detected BEFORE the ngAfterViewInit runs automatically.
    //But because the view is changed again after the AfterViewInit, we must detect the changes here at the end manually.
    //Otherwise it throws an error, which only occurs for safety reasons in development mode.
    this.cd.detectChanges();
  }
}
