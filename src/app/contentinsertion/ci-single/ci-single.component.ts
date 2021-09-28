import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ci-single',
  templateUrl: './ci-single.component.html',
  styleUrls: ['./ci-single.component.scss'],
})
export class CiSingleComponent implements OnInit {
  @Input() title: string;
  open: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  togglePanel() {
    this.open = !this.open;
  }
}
