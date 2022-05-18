import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyIngredientComponent } from './modify-ingredient.component';

describe('DialogModifyComponent', () => {
  let component: ModifyIngredientComponent;
  let fixture: ComponentFixture<ModifyIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyIngredientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
