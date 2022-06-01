import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyRecipeListComponent } from './modify-recipe-list.component';

describe('ModifyRecipeListComponent', () => {
  let component: ModifyRecipeListComponent;
  let fixture: ComponentFixture<ModifyRecipeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyRecipeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyRecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
