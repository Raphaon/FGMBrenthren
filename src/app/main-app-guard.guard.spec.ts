import { TestBed } from '@angular/core/testing';

import { MainAppGuardGuard } from './main-app-guard.guard';

describe('MainAppGuardGuard', () => {
  let guard: MainAppGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MainAppGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
