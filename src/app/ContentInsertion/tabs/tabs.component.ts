import { Component, ContentChildren, Input, QueryList } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `<div *ngIf="active" class="tab-content">
    <ng-content></ng-content>
  </div>`,
})
export class TabComponent {
  @Input() title: string;
  active: boolean = false;

  constructor() {}
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  constructor() {}

  ngAfterContentInit(): void {
    this.tabs.first.active = true;
  }

  activate(tab: TabComponent) {
    for (const tab of this.tabs) {
      tab.active = false;
    }
    tab.active = true;
  }
}
