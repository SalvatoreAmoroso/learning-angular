import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyInjectionDemoComponent } from './general.component';

describe('GeneralComponent', () => {
  let component: DependencyInjectionDemoComponent;
  let fixture: ComponentFixture<DependencyInjectionDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DependencyInjectionDemoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyInjectionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
