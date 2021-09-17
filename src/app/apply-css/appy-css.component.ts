import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-css',
  templateUrl: './appy-css.component.html',
  styleUrls: ['./appy-css.component.scss']
})
export class ApplyCssComponent implements OnInit {

  checked : boolean = false
  color: string = "green"

  constructor() {
  }

  ngOnInit(): void {
  }

}
