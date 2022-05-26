import { TestBed } from '@angular/core/testing';

import { IngredientsResolver } from './ingredients.resolver';

describe('IngredientsResolver', () => {
  let resolver: IngredientsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(IngredientsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
