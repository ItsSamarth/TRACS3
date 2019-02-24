import { TestBed } from '@angular/core/testing';

import { AircraftInfoService } from './aircraft-info.service';

describe('AircraftInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AircraftInfoService = TestBed.get(AircraftInfoService);
    expect(service).toBeTruthy();
  });
});
