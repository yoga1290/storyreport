import { TestBed, inject } from '@angular/core/testing';

import { H5rService } from './h5r.service';

describe('H5rService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [H5rService]
    });
  });

  it('should be created', inject([H5rService], (service: H5rService) => {
    expect(service).toBeTruthy();
  }));
});
