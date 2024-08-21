import { TestBed } from '@angular/core/testing';

import { RegisterServiveService } from './register-servive.service';

describe('RegisterServiveService', () => {
  let service: RegisterServiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterServiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
