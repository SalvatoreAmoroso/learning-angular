import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefDemoComponent } from './template-ref-demo.component';

describe('TemplateRefDemoComponent', () => {
  let component: TemplateRefDemoComponent;
  let fixture: ComponentFixture<TemplateRefDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateRefDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRefDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
