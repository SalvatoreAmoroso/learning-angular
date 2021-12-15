import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionPerformanceOptimizedComponent } from './change-detection-performance-optimized.component';

describe('ChangeDetectionPerformanceOptimizedComponent', () => {
  let component: ChangeDetectionPerformanceOptimizedComponent;
  let fixture: ComponentFixture<ChangeDetectionPerformanceOptimizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetectionPerformanceOptimizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionPerformanceOptimizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
