import { ContentChildren, Directive, Input, QueryList } from '@angular/core';
import { PanelComponent } from './panel.component';

@Directive({
  selector: '[chAccordion]'
})
export class AccordionDirective {

  @Input() onlyOneOpen: boolean;
  @ContentChildren(PanelComponent) panels: QueryList<PanelComponent>;

  ngAfterContentInit() {
    this.panels.forEach(panel => {
      panel.panelToggled.subscribe(panel => {

        if (typeof this.onlyOneOpen != "boolean") {
          throw new Error('onlyOneOpen must be a boolean!');
        }

        if (this.onlyOneOpen && panel.open) {
          this.closeOthers(panel)
        }
      })
    })
  }

  constructor() { }

  private closeOthers(openedPanel: PanelComponent) {
    this.panels.forEach(panel => {
      if (openedPanel != panel && panel.open) {
        panel.open = false;
      }
    })
  }
}
