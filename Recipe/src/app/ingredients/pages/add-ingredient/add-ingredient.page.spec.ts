import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIngredientPage } from './add-ingredient.page';

describe('AddIngredientPage', () => {
  let component: AddIngredientPage;
  let fixture: ComponentFixture<AddIngredientPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIngredientPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIngredientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
