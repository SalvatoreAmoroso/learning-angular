import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosyntaxComponent } from './microsyntax.component';

describe('MicrosyntaxComponent', () => {
  let component: MicrosyntaxComponent;
  let fixture: ComponentFixture<MicrosyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrosyntaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrosyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
