import { TestBed } from '@angular/core/testing';

import { AuthenIntercaptorService } from './authen-intercaptor.service';

describe('AuthenIntercaptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenIntercaptorService = TestBed.get(AuthenIntercaptorService);
    expect(service).toBeTruthy();
  });
});
