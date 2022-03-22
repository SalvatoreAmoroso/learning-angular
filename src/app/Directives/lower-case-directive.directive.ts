import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[chLowerCase]'
})
export class LowerCaseDirective {

  @HostBinding() value = "";
  @HostListener("change", ["$event"]) onChange(event: any) {
    this.value = event.target.value.toLowerCase();
  }
}