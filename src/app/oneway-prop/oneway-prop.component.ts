import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-prop',
  templateUrl: './oneway-prop.component.html',
  styleUrls: ['./oneway-prop.component.scss']
})
export class OneWayPropComponent implements OnInit {

  checked: boolean = false
  color: string = "#9cc5a1"

  constructor() {
  }

  ngOnInit(): void {
  }

}
