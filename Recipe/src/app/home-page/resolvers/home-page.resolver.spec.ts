import { TestBed } from '@angular/core/testing';

import { HomePageResolver } from './home-page.resolver';

describe('ResolversResolver', () => {
  let resolver: HomePageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HomePageResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
