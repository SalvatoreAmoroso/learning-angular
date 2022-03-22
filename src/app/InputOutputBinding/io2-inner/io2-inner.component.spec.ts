import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Io2InnerComponent } from './io2-inner.component';

describe('Io2InnerComponent', () => {
  let component: Io2InnerComponent;
  let fixture: ComponentFixture<Io2InnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Io2InnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Io2InnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
