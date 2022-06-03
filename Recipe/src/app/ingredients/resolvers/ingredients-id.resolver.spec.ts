import { TestBed } from '@angular/core/testing';

import { IngredientsIdResolver } from './ingredients-id.resolver';

describe('IngredientsIdResolver', () => {
  let resolver: IngredientsIdResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(IngredientsIdResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
