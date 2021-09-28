import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiContentchildrenComponent } from './ci-contentchildren.component';

describe('CiContentchildrenComponent', () => {
  let component: CiContentchildrenComponent;
  let fixture: ComponentFixture<CiContentchildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiContentchildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiContentchildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
