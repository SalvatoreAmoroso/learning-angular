import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ci-mutiple',
  templateUrl: './ci-multiple.component.html',
  styleUrls: ['./ci-multiple.component.scss'],
})
export class CiMultipleComponent implements OnInit {
  open: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  togglePanel() {
    this.open = !this.open;
  }
}
