import { TestBed } from '@angular/core/testing';

import { GodservService } from './godserv.service';

describe('GodservService', () => {
  let service: GodservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GodservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
