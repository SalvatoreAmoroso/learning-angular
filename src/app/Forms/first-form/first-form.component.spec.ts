import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstFormComponent } from './first-form.component';

describe('FirstFormComponent', () => {
  let component: FirstFormComponent;
  let fixture: ComponentFixture<FirstFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
