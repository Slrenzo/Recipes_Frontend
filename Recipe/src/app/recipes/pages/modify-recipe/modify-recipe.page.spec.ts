import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyRecipePage } from './modify-recipe.page';

describe('ModifyRecipePage', () => {
  let component: ModifyRecipePage;
  let fixture: ComponentFixture<ModifyRecipePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyRecipePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
