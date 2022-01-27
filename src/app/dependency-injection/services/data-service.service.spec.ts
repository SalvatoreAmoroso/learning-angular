import { TestBed } from '@angular/core/testing';

import { DataServiceOne } from './data-service.service';

describe('DataServiceService', () => {
  let service: DataServiceOne;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServiceOne);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
