import { TestBed } from '@angular/core/testing';

import { SelectedOptionsService } from './selected-options.service';

describe('SelectedOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedOptionsService = TestBed.get(SelectedOptionsService);
    expect(service).toBeTruthy();
  });
});
