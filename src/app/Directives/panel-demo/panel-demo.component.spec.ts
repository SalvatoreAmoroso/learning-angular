import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDemoComponent } from './panel-demo.component';

describe('PanelDemoComponent', () => {
  let component: PanelDemoComponent;
  let fixture: ComponentFixture<PanelDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
