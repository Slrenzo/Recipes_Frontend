import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientCardListComponent } from './ingredient-card-list.component';

describe('IngredientCardListComponent', () => {
  let component: IngredientCardListComponent;
  let fixture: ComponentFixture<IngredientCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
