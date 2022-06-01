import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyIngredientListComponent } from './modify-ingredient-list.component';

describe('ModifyIngredientListComponent', () => {
  let component: ModifyIngredientListComponent;
  let fixture: ComponentFixture<ModifyIngredientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyIngredientListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyIngredientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
