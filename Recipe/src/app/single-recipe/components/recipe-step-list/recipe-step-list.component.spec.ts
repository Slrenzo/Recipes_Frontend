import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeStepListComponent } from './recipe-step-list.component';

describe('RecipeStepListComponent', () => {
  let component: RecipeStepListComponent;
  let fixture: ComponentFixture<RecipeStepListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeStepListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeStepListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
