import { TestBed } from '@angular/core/testing';

import { ArrayTableService } from './array-table.service';

describe('ArrayTableService', () => {
  let service: ArrayTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
