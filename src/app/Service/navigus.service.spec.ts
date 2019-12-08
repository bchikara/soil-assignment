import { TestBed } from '@angular/core/testing';

import { NavigusService } from './navigus.service';

describe('NavigusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavigusService = TestBed.get(NavigusService);
    expect(service).toBeTruthy();
  });
});
