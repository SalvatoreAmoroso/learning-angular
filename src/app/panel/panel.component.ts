import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'ch-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  public open: boolean = false;

  @Input() title: string;
  @Output() panelToggled = new EventEmitter();

  ngOnInit(): void {
  }

  togglePanel() {
    this.open = !this.open;
    this.panelToggled.emit(this);
  }
}
