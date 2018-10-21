import { TestBed } from '@angular/core/testing';

import { GetContactsService } from './get-contacts.service';

describe('GetContactsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetContactsService = TestBed.get(GetContactsService);
    expect(service).toBeTruthy();
  });
});
