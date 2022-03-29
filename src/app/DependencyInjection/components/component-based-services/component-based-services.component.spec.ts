import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBasedServicesComponent } from './component-based-services.component';

describe('ComponentBasedServicesComponent', () => {
  let component: ComponentBasedServicesComponent;
  let fixture: ComponentFixture<ComponentBasedServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentBasedServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentBasedServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
