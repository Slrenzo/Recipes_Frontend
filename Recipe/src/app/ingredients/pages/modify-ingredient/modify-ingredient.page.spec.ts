import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyIngredientPage } from './modify-ingredient.page';

describe('ModifyIngredientPage', () => {
  let component: ModifyIngredientPage;
  let fixture: ComponentFixture<ModifyIngredientPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyIngredientPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyIngredientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
