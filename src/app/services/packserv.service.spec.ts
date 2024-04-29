import { TestBed } from '@angular/core/testing';
import { PackservService } from './packserv.service';


describe('PackservService', () => {
  let service: PackservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
