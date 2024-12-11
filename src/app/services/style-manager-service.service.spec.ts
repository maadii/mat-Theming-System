import { TestBed } from '@angular/core/testing';

import { StyleManagerServiceService } from './style-manager-service.service';

describe('StyleManagerServiceService', () => {
  let service: StyleManagerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StyleManagerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
