import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';

declare var jQuery: any;

@Directive({
  selector: '[chSlider]'
})
export class SliderDirectiveDirective {

  sliderRef: any;
  @Input() value: number;
  @Output() valueChange = new EventEmitter();

  constructor(private elementRef: ElementRef) {
    this.sliderRef = jQuery(elementRef.nativeElement).slider({
      slide: (event: any, ui: any) => {
        this.valueChange.emit(ui.value);
      }
    })
  }


  ngOnChanges() {
    this.sliderRef.slider("option", { value: this.value });
  }

}
