import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  borderWidth: number = 1;
  sliderValue: number = 50;

  constructor() { }

  ngOnInit(): void {
  }

}
