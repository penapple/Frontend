import { TestBed } from '@angular/core/testing';

import { AloeTokenService } from './aloe-token.service';

describe('AloeTokenService', () => {
  let service: AloeTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AloeTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
