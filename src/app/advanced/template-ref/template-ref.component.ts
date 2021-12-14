import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.scss']
})
export class TemplateRefComponent {

  @Input() entries: any[];
  @ContentChild(TemplateRef) entryTemplate: TemplateRef<any>;

  hasCustomTemplate: boolean;

  ngAfterContentInit() {
    this.hasCustomTemplate = this.entryTemplate != null;
  }
}