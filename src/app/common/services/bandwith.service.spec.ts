import { TestBed, inject } from '@angular/core/testing';

import { BandwithService } from './bandwith.service';

describe('BandwithService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BandwithService]
    });
  });

  it('should be created', inject([BandwithService], (service: BandwithService) => {
    expect(service).toBeTruthy();
  }));
});
