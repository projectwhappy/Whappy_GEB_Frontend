import { TestBed } from '@angular/core/testing';

import { StoreStateService } from './store-state.service';

describe('StoreStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreStateService = TestBed.get(StoreStateService);
    expect(service).toBeTruthy();
  });
});
