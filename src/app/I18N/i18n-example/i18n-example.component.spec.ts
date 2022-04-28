import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nExampleComponent } from './i18n-example.component';

describe('I18nExampleComponent', () => {
  let component: I18nExampleComponent;
  let fixture: ComponentFixture<I18nExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I18nExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(I18nExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
