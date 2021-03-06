import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactory, ComponentFactoryResolver, enableProdMode, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-container-ref',
  templateUrl: './view-container-ref.component.html',
  styleUrls: ['./view-container-ref.component.scss']
})
export class ViewContainerRefComponent implements AfterViewInit {

  @ViewChild("container", { read: ViewContainerRef }) container: ViewContainerRef;

  circleFactory: ComponentFactory<CircleComponent>;

  renderComponent = CircleComponent


  constructor(private resolver: ComponentFactoryResolver, private cd: ChangeDetectorRef) {
    this.circleFactory = resolver.resolveComponentFactory(CircleComponent);
  }

  ngAfterViewInit(): void {
    this.addCircle("green")
    this.addCircle("white")
    this.addCircle("red")
    this.cd.detectChanges();
  }


  addCircle(color: string): void {
    this.addCircleOnPosition(color, this.container.length)
  }

  addCircleOnPosition(color: string, index: number): void {
    const circleRef = this.container.createComponent(this.circleFactory, index)
    circleRef.instance.color = color
  }

  changeComponentClass(): void {
    this.renderComponent = this.renderComponent === CircleComponent ? SquareComponent : CircleComponent;
  }
}


@Component({
  selector: 'ch-circle',
  template: `<div [ngStyle]="{'background-color' : color}"></div>`,
  styles: [`
     div {
       border-radius: 50%;
       border: 1px solid black;
       width: 40px;
       height: 40px;
       display: inline-block;
       margin: 3px;
     }
  `]
})
export class CircleComponent {

  @Input() color: string = "black";

  constructor() { }
}

@Component({
  selector: 'ch-circle',
  template: `<div [ngStyle]="{'background-color' : color}"></div>`,
  styles: [`
     div {
       border-radius: 1%;
       border: 1px solid black;
       width: 40px;
       height: 40px;
       display: inline-block;
       margin: 3px;
     }
  `]
})
export class SquareComponent {

  @Input() color: string = "black";

  constructor() { }
}