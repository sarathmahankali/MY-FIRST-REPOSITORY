import { TestBed } from '@angular/core/testing';

import { VetDataService } from './vet-data.service';

describe('VetDataService', () => {
  let service: VetDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VetDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
