import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[chRepeater]'
})
export class RepeaterDirective {

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) {

  }

  @Input("chRepeater") set repeatIt(count: number) {
    this.container.clear();
    for (let index = 0; index < count; index++) {
      this.container.createEmbeddedView(this.template)
    }
  }

}
