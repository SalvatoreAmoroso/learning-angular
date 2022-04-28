import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i18n-example',
  templateUrl: './i18n-example.component.html',
  styleUrls: ['./i18n-example.component.scss'],
})
export class I18nExampleComponent implements OnInit {
  price: number = 3.5;
  constructor() {}

  ngOnInit(): void {}
}
