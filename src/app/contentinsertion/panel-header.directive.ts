import { Directive, getDebugNode } from '@angular/core';
import { isTaggedTemplateExpression } from 'typescript';

// In Angular muss es für jeden eigenen Tag eine Komponente geben.
// Da in diesem Fall (Content Insertion) kein Template nötig ist, reicht eine Direktive.
// Verwendet in: contentinsertion.component.html
@Directive({
  selector: 'zallisPanel',
})
export class PanelHeaderDirective {
  constructor() {}
}
