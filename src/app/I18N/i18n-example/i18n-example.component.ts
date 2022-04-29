import { NgLocalization } from '@angular/common';
import { Component, OnInit } from '@angular/core';

class MinuteCountLocalization extends NgLocalization {
  getPluralCategory(value: number, locale?: string): string {
    if (value >= 5 && value < 10) return 'few';
    if (value >= 10 && value < 20) return 'many';
    return 'other';
  }
}

@Component({
  selector: 'app-i18n-example',
  templateUrl: './i18n-example.component.html',
  styleUrls: ['./i18n-example.component.scss'],
  providers: [
    {
      provide: NgLocalization,
      useClass: MinuteCountLocalization,
    },
  ],
})
export class I18nExampleComponent implements OnInit {
  price: number = 3.5;
  minutes: number = 5;
  gender: string = '';
  readonly genders: string[] = ['male', 'female', 'other', 'car'];

  minutesTextMapping: any = {
    '=0': 'Updated just now',
    '=1': 'Updated one minute ago',
    few: 'Updated a few minutes ago', //"few" is provided by MinuteCountLocalization
    many: 'Many minutes ago', //"many" is provided by MinuteCountLocalization
    other: 'Updated # minutes ago',
  };

  genderTextMapping: any = {
    male: 'a weak male',
    female: 'an ugly woman',
    car: 'a what??',
    other: 'unknown',
  };

  constructor() {}

  ngOnInit(): void {}
}
