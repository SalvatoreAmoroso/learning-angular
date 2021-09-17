import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputInnerComponent } from './input-output-inner.component';

describe('InputOutputInnerComponent', () => {
  let component: InputOutputInnerComponent;
  let fixture: ComponentFixture<InputOutputInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputInnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
