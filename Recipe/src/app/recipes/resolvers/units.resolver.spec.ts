import { TestBed } from '@angular/core/testing';

import { UnitsResolver } from './units.resolver';

describe('UnitsResolver', () => {
  let resolver: UnitsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UnitsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
