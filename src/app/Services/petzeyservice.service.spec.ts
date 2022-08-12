import { TestBed } from '@angular/core/testing';

import { PetzeyserviceService } from './petzeyservice.service';

describe('PetzeyserviceService', () => {
  let service: PetzeyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetzeyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
