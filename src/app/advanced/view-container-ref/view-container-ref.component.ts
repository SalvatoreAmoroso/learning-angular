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

  constructor(private resolver: ComponentFactoryResolver) {
    this.circleFactory = resolver.resolveComponentFactory(CircleComponent);
  }

  ngAfterViewInit(): void {
    this.container.createComponent(this.circleFactory);
    this.container.createComponent(this.circleFactory);
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