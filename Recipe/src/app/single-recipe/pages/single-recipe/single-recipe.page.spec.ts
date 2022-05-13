import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRecipePage } from './single-recipe.page';

describe('SingleRecipePage', () => {
  let component: SingleRecipePage;
  let fixture: ComponentFixture<SingleRecipePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleRecipePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
