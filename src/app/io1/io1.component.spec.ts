import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IO1Component } from './io1.component';

describe('InputOutputComponent', () => {
  let component: IO1Component;
  let fixture: ComponentFixture<IO1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IO1Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IO1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
