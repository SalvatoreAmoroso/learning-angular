import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[chBorder]'
})
export class BorderDirective {

  @Input() chBorder = 1;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    // Ohne Renderer2: Ist nicht plattformunabhängig
    // const style = `solid ${this.chBorder}px`;
    // this.elementRef.nativeElement.style.border = style;

    // Besser mit Renderer2:
    this.renderer.setStyle(this.elementRef.nativeElement,
      'border',
      `solid ${this.chBorder}px`);
  }
}
