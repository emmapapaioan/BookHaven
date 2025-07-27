import { TestBed } from '@angular/core/testing';

import { DarkModeManager } from './dark-mode-manager';

describe('DarkModeManager', () => {
  let service: DarkModeManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkModeManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
