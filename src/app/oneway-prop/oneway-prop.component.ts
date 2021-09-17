import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-prop',
  templateUrl: './oneway-prop.component.html',
  styleUrls: ['./oneway-prop.component.scss']
})
export class ApplyCssComponent implements OnInit {

  checked : boolean = false
  color: string = "green"

  constructor() {
  }

  ngOnInit(): void {
  }

}
