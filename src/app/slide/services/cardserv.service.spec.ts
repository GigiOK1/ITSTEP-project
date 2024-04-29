import { TestBed } from '@angular/core/testing';

import { CardservService } from './cardserv.service';

describe('CardservService', () => {
  let service: CardservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
