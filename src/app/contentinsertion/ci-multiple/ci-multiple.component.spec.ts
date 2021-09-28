import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiMultipleComponent } from './ci-multiple.component';

describe('Contentinsertion2Component', () => {
  let component: CiMultipleComponent;
  let fixture: ComponentFixture<CiMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CiMultipleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
