import { TestBed } from '@angular/core/testing';

import { ComponentBasedService } from './component-based.service';

describe('ComponentBasedService', () => {
  let service: ComponentBasedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentBasedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
