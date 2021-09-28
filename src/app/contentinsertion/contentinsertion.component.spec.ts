import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInsertionComponent } from './contentinsertion.component';

describe('ContentinsertionComponent', () => {
  let component: ContentInsertionComponent;
  let fixture: ComponentFixture<ContentInsertionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentInsertionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentInsertionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
