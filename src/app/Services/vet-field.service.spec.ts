import { TestBed } from '@angular/core/testing';

import { VetFieldService } from './vet-field.service';

describe('VetFieldService', () => {
  let service: VetFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VetFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
