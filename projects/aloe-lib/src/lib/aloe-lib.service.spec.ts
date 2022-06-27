import { TestBed } from '@angular/core/testing';

import { AloeLibService } from './aloe-lib.service';

describe('AloeLibService', () => {
  let service: AloeLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AloeLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
