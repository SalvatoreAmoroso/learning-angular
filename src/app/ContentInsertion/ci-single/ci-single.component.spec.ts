import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiSingleComponent } from './ci-single.component';

describe('ContentinsertionComponent', () => {
  let component: CiSingleComponent;
  let fixture: ComponentFixture<CiSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CiSingleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
