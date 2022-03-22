import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  templateUrl: './prop-binding.component.html',
  styleUrls: ['./prop-binding.component.scss']
})
export class PropBindingComponent implements OnInit {

  checked: boolean = false
  color: string = "#505050"
  name: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
