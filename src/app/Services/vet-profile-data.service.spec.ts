import { TestBed } from '@angular/core/testing';

import { VetProfileDataService } from './vet-profile-data.service';

describe('VetProfileDataService', () => {
  let service: VetProfileDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VetProfileDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
