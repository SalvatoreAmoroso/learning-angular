import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefAndNgTemplateOutletComponent } from './template-ref-and-ng-template-outlet.component';

describe('TemplateRefAndNgTemplateOutletComponent', () => {
  let component: TemplateRefAndNgTemplateOutletComponent;
  let fixture: ComponentFixture<TemplateRefAndNgTemplateOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateRefAndNgTemplateOutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRefAndNgTemplateOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
