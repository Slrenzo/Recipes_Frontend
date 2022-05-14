import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogModifyIngredientComponent } from './dialog-modify-ingredient.component';

describe('DialogModifyComponent', () => {
  let component: DialogModifyIngredientComponent;
  let fixture: ComponentFixture<DialogModifyIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogModifyIngredientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogModifyIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
