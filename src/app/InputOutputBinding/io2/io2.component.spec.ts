import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Io2Component } from './io2.component';

describe('Io2Component', () => {
  let component: Io2Component;
  let fixture: ComponentFixture<Io2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Io2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Io2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
