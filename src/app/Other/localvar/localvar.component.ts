import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localvar',
  templateUrl: './localvar.component.html',
  styleUrls: ['./localvar.component.scss']
})
export class LocalVarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  randomString() {
    const randomLength: number = Math.floor(Math.random() * 5) + 5
    let randomString = ""
    for (let index = 0; index < randomLength; index++) {
      randomString += String.fromCharCode(Math.floor(Math.random() * 25) + 65)
    }
    return randomString
  }

}
