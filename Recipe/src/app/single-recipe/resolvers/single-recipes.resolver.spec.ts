import { TestBed } from '@angular/core/testing';

import { SingleRecipesResolver } from './single-recipes.resolver';

describe('SingleRecipesResolver', () => {
  let resolver: SingleRecipesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SingleRecipesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
