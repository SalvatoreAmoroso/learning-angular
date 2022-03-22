import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalvarComponent } from './localvar.component';

describe('LocalvarComponent', () => {
  let component: LocalvarComponent;
  let fixture: ComponentFixture<LocalvarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalvarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
