import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionPerformanceComponent } from './change-detection-performance.component';

describe('ChangeDetectionPerformanceComponent', () => {
  let component: ChangeDetectionPerformanceComponent;
  let fixture: ComponentFixture<ChangeDetectionPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetectionPerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
