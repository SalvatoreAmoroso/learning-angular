import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardDirectivesComponent } from './standard-directives.component';

describe('StandardDirectivesComponent', () => {
  let component: StandardDirectivesComponent;
  let fixture: ComponentFixture<StandardDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
