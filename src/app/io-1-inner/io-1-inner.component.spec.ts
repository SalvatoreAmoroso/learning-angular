import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IO1InnerComponent } from './io-1-inner.component';

describe('InputOutputInnerComponent', () => {
  let component: IO1InnerComponent;
  let fixture: ComponentFixture<IO1InnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IO1InnerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IO1InnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
