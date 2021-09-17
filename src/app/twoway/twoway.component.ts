import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.scss']
})
export class TwowayComponent implements OnInit {

  name: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
